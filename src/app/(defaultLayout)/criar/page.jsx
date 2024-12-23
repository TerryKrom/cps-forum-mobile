import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { sectionlinks } from '../../../components/data/section-data';
import { Picker } from '@react-native-picker/picker';
import { toast } from 'react-toastify';

// Schema de validação com Zod
const formSchema = z.object({
  title: z.string().min(10, { message: 'O título deve ter no mínimo 10 caracteres.' }).max(150),
  privacy: z.string(),
  section: z.string(),
  body: z.string().min(20, { message: 'O corpo do tópico deve ter no mínimo 20 caracteres.' }),
});

const Criar = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      privacy: 'public',
      section: '',
      body: '',
    },
  });

  const [step, setStep] = useState(1);
  const [selectedTags, setSelectedTags] = useState([]);
  const [inputTag, setInputTag] = useState('');

  const onSubmit = async (values) => {
    values.tags = selectedTags;
    const { title, privacy, section, body } = values;

    const requestBody = {
      userId: 2,
      title,
      privacy,
      section,
      body,
      tag: 'Tag Example',
    };

    try {
      const req = await fetch('https://cpsforum.com.br/api/criar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
      });

      const res = await req.json();

      if (res.success) {
        toast.success('Tópico criado com sucesso!', JSON.stringify(res.message));
      } else {
        toast.error('Erro ao criar tópico.');
      }
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
      toast.error('Erro na comunicação com o servidor.');
    }
  };

  const handleTags = (tag) => {
    if (tag && !selectedTags.includes(tag) && selectedTags.length < 6) {
      setSelectedTags((prevTags) => [...prevTags, tag]);
    }
    setInputTag('');
  };

  const removeTag = (tagToRemove) => {
    setSelectedTags((prevTags) => prevTags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.header}>Criar Tópico</Text>

          {/* Título */}
          <View style={styles.formGroup}>
            <Text style={styles.label}>Título</Text>
            <Controller
              control={control}
              name="title"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  style={styles.input}
                  placeholder="Digite o título do tópico"
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
            {errors.title && <Text style={styles.error}>{errors.title.message}</Text>}
            {step === 1 && (
              <TouchableOpacity style={styles.button} onPress={() => setStep(step + 1)}>
                <Text style={styles.buttonText}>Próximo</Text>
              </TouchableOpacity>
            )}
          </View>

          {/* Privacidade */}
          {step >= 2 && (
            <View style={styles.formGroup}>
              <Text style={styles.label}>Privacidade</Text>
              <Controller
                control={control}
                name="privacy"
                render={({ field: { onChange, value } }) => (
                  <Picker selectedValue={value} onValueChange={onChange} style={styles.picker}>
                    <Picker.Item label="Público" value="public" />
                    <Picker.Item label="Minha instituição" value="institution" />
                    <Picker.Item label="Privado" value="private" />
                  </Picker>
                )}
              />
              {step === 2 && (
                <TouchableOpacity style={styles.button} onPress={() => setStep(step + 1)}>
                  <Text style={styles.buttonText}>Próximo</Text>
                </TouchableOpacity>
              )}
            </View>
          )}

          {/* Seção */}
          {step >= 3 && (
            <View style={styles.formGroup}>
              <Text style={styles.label}>Seção</Text>
              <Controller
                control={control}
                name="section"
                render={({ field: { onChange, value } }) => (
                  <Picker selectedValue={value} onValueChange={onChange} style={styles.picker}>
                    {sectionlinks.slice(1).map((section, index) => (
                      <Picker.Item key={index} label={section.title} value={section.slug} />
                    ))}
                  </Picker>
                )}
              />
              {step === 3 && (
                <TouchableOpacity style={styles.button} onPress={() => setStep(step + 1)}>
                  <Text style={styles.buttonText}>Próximo</Text>
                </TouchableOpacity>
              )}
            </View>
          )}

          {/* Tags */}
          {step >= 4 && (
            <View style={styles.formGroup}>
              <Text style={styles.label}>Tags (opcional)</Text>
              <View style={styles.tagsContainer}>
                {selectedTags.map((tag, index) => (
                  <TouchableOpacity key={index} onPress={() => removeTag(tag)} style={styles.tag}>
                    <Text style={styles.tagText}>{tag}</Text>
                  </TouchableOpacity>
                ))}
              </View>
              <TextInput
                style={styles.input}
                placeholder="Adicionar tag"
                value={inputTag}
                onChangeText={setInputTag}
                onSubmitEditing={() => handleTags(inputTag)}
              />
              <TouchableOpacity style={styles.button} onPress={() => handleTags(inputTag)}>
                <Text style={styles.buttonText}>Adicionar Tag</Text>
              </TouchableOpacity>
              {step === 4 && (
                <TouchableOpacity style={styles.button} onPress={() => setStep(step + 1)}>
                  <Text style={styles.buttonText}>Próximo</Text>
                </TouchableOpacity>
              )}
            </View>
          )}

          {/* Corpo */}
          {step >= 5 && (
            <View style={styles.formGroup}>
              <Text style={styles.label}>Corpo</Text>
              <Controller
                control={control}
                name="body"
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    style={[styles.input, styles.textArea]}
                    placeholder="Escreva o corpo do tópico"
                    value={value}
                    onChangeText={onChange}
                    multiline
                  />
                )}
              />
              {errors.body && <Text style={styles.error}>{errors.body.message}</Text>}
            </View>
          )}

          <TouchableOpacity
            style={[styles.button, step < 5 && { backgroundColor: '#ccc' }]}
            onPress={handleSubmit(onSubmit)}
            disabled={step < 5}
          >
            <Text style={styles.buttonText}>Criar Tópico</Text>
          </TouchableOpacity>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#ffffff',
    flexGrow: 1,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  picker: {
    height: 50,
    width: '100%',
    borderRadius: 5,
    backgroundColor: '#ececec',
    marginBottom: 5,
  },
  textArea: {
    height: 100,
  },
  error: {
    color: '#ff0000',
    fontSize: 12,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: '#4594ff',
    padding: 5,
    borderRadius: 5,
    marginRight: 5,
    marginBottom: 5,
  },
  tagText: {
    color: '#ffffff',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#4594ff',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default Criar;
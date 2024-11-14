import React, { useState, useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Feed } from '../../../components/feed/feed';
import { Topic } from '../../../components/data/topic-data';
import dayjs from 'dayjs';
import NewTopicButton from '../../../components/general/newtopic';
import globalStyles from '../../../globalStyles'; // Importe o estilo global

const Home = () => {
  const forumMessagesTopics = Topic.filter(topic => topic.section === 1);
  
  // Lógica para os tópicos relevantes e recentes
  const relevantTopics = useMemo(() => Topic.filter(topic => topic.section !== 1), []);
  const recentTopics = useMemo(() => 
    Topic.filter(topic => topic.section !== 1)
      .sort((a, b) => dayjs(a.date).isBefore(dayjs(b.date)) ? 1 : -1), [] // Ordenação corrigida
  );

  const [activeTab, setActiveTab] = useState('relevant');

  const displayedTopics = useMemo(() => {
    // Alternar entre os tópicos relevantes ou recentes com base no estado da aba ativa
    return activeTab === 'relevant' ? relevantTopics : recentTopics;
  }, [activeTab, relevantTopics, recentTopics]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Feed items={forumMessagesTopics} />

      {/* Tabs Component */}
      <View style={styles.tabsContainer}>
        <View style={styles.tabsList}>
          <TouchableOpacity
            onPress={() => setActiveTab('relevant')}
            style={[styles.tabTrigger, activeTab === 'relevant' && styles.activeTab]}
          >
            <Text style={[globalStyles.text, activeTab === 'relevant' ? styles.activeTabText : styles.tabText]}>Relevantes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActiveTab('recent')}
            style={[styles.tabTrigger, activeTab === 'recent' && styles.activeTab]}
          >
            <Text style={[globalStyles.text, activeTab === 'recent' ? styles.activeTabText : styles.tabText]}>Recentes</Text>
          </TouchableOpacity>
        </View>
        <NewTopicButton />
      </View>

      {/* Tabs Content */}
      <Feed items={displayedTopics} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 16,
    marginLeft: 3,
  },
  tabsList: {
    flexDirection: 'row',
  },
  tabTrigger: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    backgroundColor: '#eee',
    color: "#ffffff",
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#4594ff',
  },
  tabText: {
    color: '#000',
  },
  activeTabText: {
    color: '#eee',
    fontWeight: '600',
  },
});

export default Home;
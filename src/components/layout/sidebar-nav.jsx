import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

const SideBarLink = React.forwardRef(({ links, isCollapsed, ...props }, ref) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {links.map((link, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.link, { backgroundColor: isCollapsed ? 'transparent' : '#f0f0f0' }]}
          onPress={() => navigation.navigate(link.slug)}
        >
          <AntDesign name={link.iconName} size={20} color="black" />
          {!isCollapsed && <Text style={styles.linkText}>{link.title}</Text>}
        </TouchableOpacity>
      ))}
    </View>
  );
});

const SideBarSectionLink = React.forwardRef(({ links, isCollapsed, route, ...props }, ref) => {
  const navigation = useNavigation(); // Obtendo o objeto de navegação
  const { slug } = navigation.getState || {}; // Acessando slug de params

  return (
    <View style={styles.container}>
      {links.map((link, index) => (
        <View key={index} style={styles.sectionContainer}>
          {!isCollapsed && <Text style={styles.sectionTitle}>{link.title}</Text>}
          {link.sections.map((section, sindex) => (
            <TouchableOpacity
              key={`${index}-${sindex}`}
              style={styles.sectionLink}
              onPress={() => navigation.navigate(section.slug)}
            >
              <Text style={[
                styles.sectionLinkText,
                slug === section.slug && styles.activeLink
              ]}>
                {section.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  linkText: {
    marginLeft: 10,
  },
  sectionContainer: {
    marginVertical: 10,
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  sectionLink: {
    padding: 5,
  },
  sectionLinkText: {
    color: 'grey',
  },
  activeLink: {
    color: 'blue',
  },
});

SideBarLink.displayName = "SideBarLink";
SideBarSectionLink.displayName = "SideBarSectionLink";

export { SideBarLink, SideBarSectionLink };

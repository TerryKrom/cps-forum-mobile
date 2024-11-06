import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Feed } from '../../../components/feed/feed';
import { Topic } from '../../../components/data/topic-data';
import PageTitle from '../../../components/layout/pagetitle';
import dayjs from 'dayjs';
import NewTopicButton from '../../../components/general/newtopic';
import globalStyles from '../../../globalStyles'; // Importe o estilo global

const Home = () => {
  const forumMessagesTopics = Topic.filter(topic => topic.section === 1);
  const relevantTopics = Topic.filter(topic => topic.section !== 1);
  const recentTopics = Topic.filter(topic => topic.section !== 1).sort((a, b) => dayjs(a.date).isBefore(dayjs(b.date) ? 1 : -1));

  const [activeTab, setActiveTab] = React.useState('relevant');

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
      {activeTab === 'relevant' ? (
        <Feed items={relevantTopics} />
      ) : (
        <Feed items={recentTopics} />
      )}
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
  },
  tabsList: {
    flexDirection: 'row',
  },
  tabTrigger: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    backgroundColor: '#e0e0e0',
    marginRight: 8,
  },
  activeTab: {
    backgroundColor: '#6200ee',
  },
  tabText: {
    color: '#000',
  },
  activeTabText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Home;
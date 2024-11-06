import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TooltipProvider } from '../ui/tooltip';
import Header from '../header/header'; // Certifique-se de que o caminho está correto

const MainLayout = ({ children }) => {
  return (
    <TooltipProvider delayDuration={0}>
      <View style={styles.layoutContainer}>
        {/* Header */}
        <Header />

        <View style={styles.contentContainer}>

          {/* Main Content Area */}
          <View style={styles.mainContent}>
            {children}
          </View>

        </View>
      </View>
    </TooltipProvider>
  );
};

const styles = StyleSheet.create({
  layoutContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  mainContent: {
    flex: 3,
    paddingHorizontal: 16,
  },
});

export default MainLayout;

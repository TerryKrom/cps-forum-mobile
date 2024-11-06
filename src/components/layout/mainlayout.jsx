import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TooltipProvider } from '../ui/tooltip';
import LeftSidebar from '../../components/layout/leftsidebar';
import RightSidebar from '../../components/layout/rightsidebar';
import Header from '../header/header'; // Certifique-se de que o caminho está correto

const MainLayout = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Funções de colapso e expansão (usando state ao invés de cookies para armazenar estado)
  const handleCollapse = () => {
    setIsCollapsed(true);
  };

  const handleExpand = () => {
    setIsCollapsed(false);
  };

  return (
    <TooltipProvider delayDuration={0}>
      <View style={styles.layoutContainer}>
        {/* Header */}
        <Header />

        <View style={styles.contentContainer}>
          {/* Left Sidebar */}
          <View
            style={[
              styles.sidebar,
              isCollapsed ? styles.collapsedSidebar : styles.expandedSidebar,
            ]}
          >
            <LeftSidebar isCollapsed={isCollapsed} />
          </View>

          {/* Main Content Area */}
          <View style={styles.mainContent}>
            {children}
          </View>

          {/* Right Sidebar */}
          <View style={styles.sidebar}>
            <RightSidebar />
          </View>
        </View>
      </View>
    </TooltipProvider>
  );
};

const styles = StyleSheet.create({
  layoutContainer: {
    flex: 1,
    flexDirection: 'column', // Mudei para 'column' para empilhar o Header acima
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  sidebar: {
    flex: 1,
    maxHeight: '100%',
    backgroundColor: '#f8f8f8',
    overflow: 'scroll',
  },
  collapsedSidebar: {
    width: 4,
  },
  expandedSidebar: {
    width: '20%',
  },
  mainContent: {
    flex: 3,
    paddingHorizontal: 16,
  },
});

export default MainLayout;

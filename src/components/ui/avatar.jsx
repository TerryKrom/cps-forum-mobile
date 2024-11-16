import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Avatar = React.forwardRef(({ className, style, children, ...props }, ref) => (
  <View
    ref={ref}
    style={[styles.avatar, style]}
    {...props}>
    {children}
  </View>
));
Avatar.displayName = 'Avatar';

const AvatarImage = React.forwardRef(({ className, style, source, ...props }, ref) => (
  <Image
    ref={ref}
    style={[styles.avatarImage, style]}
    source={source}
    {...props}
  />
));
AvatarImage.displayName = 'AvatarImage';

const AvatarFallback = React.forwardRef(({ className, style, children, ...props }, ref) => (
  <View
    ref={ref}
    style={[styles.avatarFallback, style]}
    {...props}>
    <Text style={styles.avatarFallbackText}>{children}</Text>
  </View>
));
AvatarFallback.displayName = 'AvatarFallback';

const styles = StyleSheet.create({
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
  },
  avatarImage: {
    height: '100%',
    width: '100%',
  },
  avatarFallback: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
  },
  avatarFallbackText: {
    fontSize: 18,
    color: '#555',
  },
});

export { Avatar, AvatarImage, AvatarFallback };

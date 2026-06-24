import React, { useRef, useState, useCallback } from 'react';
import { View, ScrollView, Animated, StyleSheet, Platform, LayoutChangeEvent } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Navbar from './src/components/Navbar';
import Hero from './src/components/Hero';
import About from './src/components/About';
import Career from './src/components/Career';
import Projects from './src/components/Projects';
import Skills from './src/components/Skills';
import Contact from './src/components/Contact';
import C from './src/theme/colors';

const NAV_HEIGHT = 64;

export default function App() {
  const scrollRef = useRef<ScrollView>(null);
  const scrollY = useRef(new Animated.Value(0)).current;
  const [sectionOffsets, setSectionOffsets] = useState<Record<string, number>>({});

  const registerSection = useCallback((name: string, e: LayoutChangeEvent) => {
    const y = e?.nativeEvent?.layout?.y ?? 0;
    setSectionOffsets((prev) => ({ ...prev, [name]: y }));
  }, []);

  const scrollToSection = useCallback(
    (name: string) => {
      const y = sectionOffsets[name];
      if (y !== undefined && scrollRef.current) {
        scrollRef.current.scrollTo({ y: Math.max(0, y - NAV_HEIGHT + 1), animated: true });
      }
    },
    [sectionOffsets]
  );

  return (
    <View style={styles.root}>
      <StatusBar style="dark" />
      <Navbar onNavigate={scrollToSection} />
      <ScrollView
        ref={scrollRef}
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        <Hero onLayout={(e) => registerSection('hero', e)} />
        <About onLayout={(e) => registerSection('about', e)} />
        <Career
          onLayout={(e) => registerSection('career', e)}
          scrollY={scrollY}
          sectionY={sectionOffsets['career'] ?? 0}
        />
        <Projects onLayout={(e) => registerSection('projects', e)} />
        <Skills onLayout={(e) => registerSection('skills', e)} />
        <Contact onLayout={(e) => registerSection('contact', e)} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: C.bg,
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingTop: Platform.OS === 'web' ? NAV_HEIGHT : 0,
  },
});

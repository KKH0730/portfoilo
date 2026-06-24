import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import C from '../theme/colors';

const NAV_HEIGHT = 64;
const NAV_LINKS = [
  { label: 'About', id: 'about' },
  { label: 'Career', id: 'career' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar({ onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    if (Platform.OS !== 'web') return;
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (id) => {
    setActiveSection(id);
    if (onNavigate) onNavigate(id);
  };

  return (
    <View style={[styles.wrapper, scrolled && styles.wrapperScrolled]}>
      <View style={styles.inner}>
        <TouchableOpacity onPress={() => handleNav('hero')} activeOpacity={0.8}>
          <View style={styles.logo}>
            <View style={styles.logoIcon}>
              <Text style={styles.logoIconText}>K</Text>
            </View>
            <Text style={styles.logoText}>김경호</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.links}>
          {NAV_LINKS.map((link) => (
            <TouchableOpacity
              key={link.id}
              onPress={() => handleNav(link.id)}
              activeOpacity={0.7}
              style={styles.linkBtn}
            >
              <Text
                style={[
                  styles.linkText,
                  activeSection === link.id && styles.linkTextActive,
                ]}
              >
                {link.label}
              </Text>
              {activeSection === link.id && <View style={styles.linkDot} />}
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: Platform.OS === 'web' ? 'fixed' : 'relative',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    height: NAV_HEIGHT,
    backgroundColor: 'rgba(248, 249, 255, 0.88)',
    borderBottomWidth: 1,
    borderBottomColor: 'transparent',
    ...(Platform.OS === 'web' ? { backdropFilter: 'blur(16px)' } : {}),
  },
  wrapperScrolled: {
    borderBottomColor: C.border,
    backgroundColor: 'rgba(248, 249, 255, 0.95)',
  },
  inner: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
    maxWidth: 1200,
    alignSelf: 'center',
    width: '100%',
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  logoIcon: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: C.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoIconText: {
    color: C.white,
    fontSize: 16,
    fontWeight: '700',
  },
  logoText: {
    color: C.text,
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: -0.3,
  },
  links: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  linkBtn: {
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  linkText: {
    color: C.textSub,
    fontSize: 14,
    fontWeight: '500',
  },
  linkTextActive: {
    color: C.accent,
    fontWeight: '600',
  },
  linkDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: C.accent,
    marginTop: 3,
  },
});

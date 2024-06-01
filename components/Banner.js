import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Banner = () => {
  const [bannerIndex, setBannerIndex] = useState(0);
  const bannerInfo = [
    "Compra Rápida. Compre Roupas Mais Rápido...",
    "Moda. Roupas femininas a preço de banana!",
    "Roupas Masculinas. Roupas da Puma, Adidas, Nike..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex((prevIndex) => (prevIndex + 1) % bannerInfo.length);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.banner}>
      <Text>{bannerInfo[bannerIndex]}</Text>
      {/* <View style={styles.bannerButtons}>
        <Button title="<" onPress={() => setBannerIndex((bannerIndex - 1 + bannerInfo.length) % bannerInfo.length)} />
        <Button title=">" onPress={() => setBannerIndex((bannerIndex + 1) % bannerInfo.length)} />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: '80%',
    width: '100%',
    backgroundColor: 'rgb(6, 144, 179)',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
});
//   bannerButtons: {
//     flexDirection: 'row',
//     position: 'absolute',
//     bottom: 10,
//     gap: 305
//   },


export default Banner;
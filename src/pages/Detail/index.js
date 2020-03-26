import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, TouchableOpacity, Image, Text, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Detail() {
  const navigation = useNavigation();

  const route = useRoute();
  const { incident } = route.params;
  const value = Intl.NumberFormat("pt-BR", { style: 'currency', currency: 'BRL' }).format(incident.value);

  function navigateBackToHome() {
    navigation.goBack();
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: 'Herói do caso: Cadelinha atropelada',
      recipients: [incident.email],
      body: `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${value}.`
    });
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=+55${incident.whatsapp}&text=${message}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity
          onPress={navigateBackToHome}
        >
          <Feather
            name="arrow-left"
            color="#e02041"
            size={28}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>{incident.name}</Text>
          </View>
          <View>
            <Text style={styles.incidentProperty}>LOCALIDADE:</Text>
            <Text style={styles.incidentValue}>{incident.city}/{incident.uf}</Text>
          </View>
        </View>

        <Text style={styles.incidentProperty}>CASO:</Text>
        <Text style={styles.incidentValue}>{incident.title}</Text>

        <Text style={styles.incidentProperty}>CASO:</Text>
        <Text style={styles.incidentValue}>{incident.description}</Text>

        <Text style={styles.incidentProperty}>VALOR:</Text>
        <Text style={[styles.incidentValue, { marginBottom: 0 }]}>
          {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}
        </Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.contactBoxTitle}>Salva o dia!</Text>
        <Text style={styles.contactBoxTitle}>Seja o herói desse caso.</Text>
        <Text style={styles.contactBoxSescription}>Entre em contato</Text>
        <View style={styles.contactBoxButtons}>
          <TouchableOpacity
            style={styles.action}
            onPress={sendWhatsapp}
          >
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.action}
            onPress={sendMail}
          >
            <Text style={styles.actionText}>Email</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
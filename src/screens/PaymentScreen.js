// src/screens/PaymentScreen.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useStripe } from '@stripe/stripe-react-native';

const PaymentScreen = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const { confirmPayment } = useStripe();

  const handlePayment = async () => {
    const response = await fetch('https://your-backend.com/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ plan: selectedPlan }),
    });
    const { clientSecret } = await response.json();

    const { error } = await confirmPayment(clientSecret, {
      type: 'Card',
    });

    if (error) {
      console.error('Erro na confirmação do pagamento', error);
    } else {
      console.log('Pagamento bem-sucedido');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha seu Plano</Text>
      <Button title="FREE" onPress={() => setSelectedPlan('free')} />
      <Button title="PREMIUM MENSAL" onPress={() => setSelectedPlan('premium_mensal')} />
      <Button title="PREMIUM ANUAL" onPress={() => setSelectedPlan('premium_anual')} />
      <Button title="Pagar" onPress={handlePayment} disabled={!selectedPlan} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default PaymentScreen;


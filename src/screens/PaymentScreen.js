import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const PaymentScreen = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
  };

  const handlePayment = async () => {
    if (selectedPlan === null) {
      alert("Por favor, selecione um plano primeiro.");
      return;
    }

    // Dados do pagamento para enviar para a API do Mercado Pago
    const paymentData = {
      plan: selectedPlan,
      // Outros dados necessários para o pagamento...
    };

    try {
      // Fazer a requisição para a API do Mercado Pago
      const response = await fetch('https://api.mercadopago.com/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer SEU_TOKEN_DE_ACESSO_AQUI'
        },
        body: JSON.stringify(paymentData)
      });

      if (!response.ok) {
        throw new Error('Erro ao processar pagamento');
      }

      const responseData = await response.json();
      // Aqui você pode lidar com a resposta da API do Mercado Pago
      alert(`Pagamento realizado com sucesso para o plano ${selectedPlan}!`);
    } catch (error) {
      alert("Ocorreu um erro ao processar o pagamento. Por favor, tente novamente mais tarde.");
      console.error(error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Selecione um plano:</Text>
      <Button title="FREE" onPress={() => handleSelectPlan('FREE')} />
      <Button title="PREMIUM MENSAL" onPress={() => handleSelectPlan('PREMIUM MENSAL')} />
      <Button title="PREMIUM ANUAL" onPress={() => handleSelectPlan('PREMIUM ANUAL')} />

      {selectedPlan && (
        <View style={{ marginTop: 20 }}>
          <Text>Você selecionou o plano: {selectedPlan}</Text>
          <Button title="Realizar Pagamento" onPress={handlePayment} />
        </View>
      )}
    </View>
  );
};

export default PaymentScreen;


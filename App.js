import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const TelaPerfil = () => {
    return (
        <View
            style={{
                flexDirection: 'row',
                height: 100,
                padding: 20,
            }}>

            <View>
                <TouchableOpacity>
                    <Text>Botão Voltar</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity>
                    <Text>Mensagem</Text>
                </TouchableOpacity>
            </View>
            <View>
                <View>  
                    <Text>1k</Text>
                    <Text>Followers</Text> 
                </View>
                <View>  
                    <Text>342</Text>
                    <Text>Following</Text> 
                </View>

                <Text>@RafaelPagliari</Text>
                <Text>My name is Catherine. I like dancing in the rain and travelling all around the world.</Text>
                <TouchableOpacity><Text>Follow</Text></TouchableOpacity>
                <TouchableOpacity><Text>Message</Text></TouchableOpacity>

                <TouchableOpacity><Text>All</Text></TouchableOpacity>
                <TouchableOpacity><Text>Photos</Text></TouchableOpacity>
                <TouchableOpacity><Text>Videos</Text></TouchableOpacity>
            </View>
        </View>
    );
};

export default TelaPerfil;


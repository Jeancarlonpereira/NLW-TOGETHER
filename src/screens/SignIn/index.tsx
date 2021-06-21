import React from 'react';

import { View, Text, Image, StatusBar } from "react-native";
import Ilustration from '../../assets/illustration.png'
import { styles } from "./style";
import { ButtonIcon } from '../../components/ButtonIcon';
export function SignIn() {
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="light-content"
                backgroundColor='transparent'
                translucent
            />
            <Image
                source={Ilustration}
                style={styles.image}
                resizeMode='stretch'
            >

            </Image>
            <View style={styles.content}>
                <Text style={styles.title}>
                    Organize{'\n'}suas jogatinas{'\n'}facilmente
                </Text>
                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games{'\n'}
                    favoritos com seus amigos
                </Text>
                <ButtonIcon title="Entrar com o Discord"
                    activeOpacity={0.7} />
            </View>

        </View>
    )

}
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";

export function ModalPassword({  }){
    return(
        <View style={styles.modal}>
            <View style={styles.content}>
                <Text style={styles.title} >Senha Gerada:</Text>

                <Pressable style={styles.innerPassword}>
                    <Text style={styles.password}> 123123 </Text>
                </Pressable>

                <View style={styles.btns}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.btnText} >Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[ styles.button , styles.buttonSave]}>
                        <Text style={styles.saveText} >Salvar Senha</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    modal:{
        backgroundColor: 'rgba(24, 24, 24, 0.6)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        backgroundColor: '#FFF',
        width: '85%',
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8, 
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        color: "#000",
        marginBottom: 24
    },
    innerPassword:{
        backgroundColor: '#0E0E0E',
        width: '90%',
        padding: 14,
        borderRadius: 8
    },
    password:{
        color: '#fff',
        textAlign: 'center'
    },
    btns:{
        flexDirection: 'row',
        width: '90%',
        marginTop: 8,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    button:{
        flex: 1,
        alignItems: 'center',
        marginTop: 14,
        marginBottom: 14,
        padding: 8
    },
    btnText:{
    },
    buttonSave:{
        backgroundColor: '#393DE9',
        borderRadius: 8
    },
    saveText:{
        color: '#FFF',
        fontWeight: 'bold'
    }
})
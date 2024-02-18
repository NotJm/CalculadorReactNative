import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0', // Gris claro
    },
    containerCalculadora: {
        width: "80%",
        maxWidth: 400,
        padding: 16,
        borderWidth: 2,
        borderColor: '#333', // Gris oscuro
        borderRadius: 12,
        backgroundColor: '#fff', // Blanco
        shadowColor: '#333', // Gris oscuro
        shadowOpacity: 0.3,
        shadowRadius: 20,
        elevation: 5,
    },
    button: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 24,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#333', // Gris oscuro
        shadowOpacity: 0.2,
        shadowRadius: 12,
        backgroundColor: '#4285f4', // Azul oscuro
    },
    box: {
        borderColor: '#333', // Gris oscuro
        borderWidth: 2,
        borderRadius: 10,
        height: 70,
        alignItems: 'flex-end',
        justifyContent: 'center',
        padding: 16,
        margin: 10,
        backgroundColor: '#fff', // Blanco
    },
    textBox: {
        fontSize: '2rem',
        textAlign: 'right',
        color: '#333', // Gris oscuro
    },
    textButton: {
        fontSize: '1rem',
        color: '#fff', // Blanco
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 8,
    },
    groupButton: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
});

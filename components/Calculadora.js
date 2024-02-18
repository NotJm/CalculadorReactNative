import { View } from "react-native-web";
import { Box, ButtonNumber } from "./Box";
import { styles } from "./Styles";
import React, { useState } from 'react';
let number1 = NaN, number2 = NaN;
let operator = "";

export const Calculadora = () => {

    const [input, setInput] = useState('0');
    const [operator, setOperator] = useState('');
    const [prevInput, setPrevInput] = useState('');

    const handleButtonPress = (value) => {
        switch (value) {
            case 'C':
                setInput('0');
                setOperator('');
                setPrevInput('');
                break;
            case '<-':
                setInput((prevInput) => (prevInput.length > 1 ? prevInput.slice(0, -1) : '0'));
                break;
            case '=':
                performCalculation();
                break;
            case '+/-':
                setInput((prevInput) => (parseFloat(prevInput) * -1).toString());
                break;
            case '.':
                if (!input.includes('.')) {
                    setInput((prevInput) => prevInput + '.');
                }
                break;
            case '%':
                handlePercentage();
                break;
            case '1/x':
                handleInverse();
                break;
            case 'sqr':
                handleSquare();
                break;
            case 'x²':
                handleSquareX();
            break;
            case 'CE':
                setInput((prevInput) => (prevInput.length > 1 ? prevInput.slice(0, -1) : '0'));
                break;
            default:
                if (value.match(/[0-9]/)) {
                    handleNumberPress(value);
                } else if (value.match(/[\+\-\*\/]/)) {
                    handleOperatorPress(value);
                }
                break;
        }
    };

    const handleNumberPress = (value) => {
        setInput((prevInput) => (prevInput === '0' ? value : prevInput + value));
    };

    const handleSquareX = () => {
        setInput((prevInput) => prevInput * prevInput);
    }

    const handleOperatorPress = (value) => {
        if (operator && prevInput && input !== 'Error') {
            performCalculation();
        }
        setOperator(value);
        setPrevInput(input);
        setInput('0');
    };

    const handlePercentage = () => {
        setInput((prevInput) => (parseFloat(prevInput) / 100).toString());
    };

    const handleInverse = () => {
        setInput((prevInput) => (1 / parseFloat(prevInput)).toString());
    };

    const handleSquare = () => {
        setInput((prevInput) => (parseFloat(prevInput) ** 2).toString());
    };

    const performCalculation = () => {
        try {
            const num1 = parseFloat(prevInput);
            const num2 = parseFloat(input);
            if (!isNaN(num1) && !isNaN(num2)) {
                switch (operator) {
                    case '+':
                        setInput((num1 + num2).toString());
                        break;
                    case '-':
                        setInput((num1 - num2).toString());
                        break;
                    case '*':
                        setInput((num1 * num2).toString());
                        break;
                    case '/':
                        if (num2 !== 0) {
                            setInput((num1 / num2).toString());
                        } else {
                            setInput('Error');
                        }
                        break;
                    default:
                        break;
                }
            }
        } catch (error) {
            setInput('Error');
        }
        setOperator('');
        setPrevInput('');
    };



    return (
        <View>
            <Box value={input} />
            <View style={styles.groupButton}>
                <View style={styles.row}>
                    <ButtonNumber text={' % '} colorA={'#e0e0e0'} ColorB={'#eac195'} onPress={() => handleButtonPress('%')} />
                    <ButtonNumber text={'CE'} colorA={'#e0e0e0'} ColorB={'#eac195'} onPress={() => handleButtonPress('CE')} />
                    <ButtonNumber text={' C '} colorA={'#e0e0e0'} ColorB={'#eac195'} onPress={() => handleButtonPress('C')} />
                    <ButtonNumber text={'<-'} colorA={'#e0e0e0'} ColorB={'#eac195'} onPress={() => handleButtonPress('<-')} />
                </View>
                <View style={styles.row}>
                    <ButtonNumber text={'1/x'} colorA={'#e0e0e0'} ColorB={'#eac195'} onPress={() => handleButtonPress('1/x')} />
                    <ButtonNumber text={'x²'} colorA={'#e0e0e0'} ColorB={'#eac195'} onPress={() => handleButtonPress('x²')} />
                    <ButtonNumber text={'sqr'} colorA={'#e0e0e0'} ColorB={'#eac195'} onPress={() => handleButtonPress('sqr')} />
                    <ButtonNumber text={' / '} colorA={'#e0e0e0'} ColorB={'#eac195'} onPress={() => handleButtonPress('/')} />
                </View>
                <View style={styles.row}>
                    <ButtonNumber text={' 7 '} colorA={'#e0e0e0'} ColorB={'#eac195'} onPress={() => handleButtonPress('7')} />
                    <ButtonNumber text={' 8 '} colorA={'#e0e0e0'} ColorB={'#eac195'} onPress={() => handleButtonPress('8')} />
                    <ButtonNumber text={' 9 '} colorA={'#e0e0e0'} ColorB={'#eac195'} onPress={() => handleButtonPress('9')} />
                    <ButtonNumber text={' * '} colorA={'#e0e0e0'} ColorB={'#eac195'} onPress={() => handleButtonPress('*')} />
                </View>
                <View style={styles.row}>
                    <ButtonNumber text={' 4 '} colorA={'#e0e0e0'} ColorB={'#eac195'} onPress={() => handleButtonPress('4')} />
                    <ButtonNumber text={' 5 '} colorA={'#e0e0e0'} ColorB={'#eac195'} onPress={() => handleButtonPress('5')} />
                    <ButtonNumber text={' 6 '} colorA={'#e0e0e0'} ColorB={'#eac195'} onPress={() => handleButtonPress('6')} />
                    <ButtonNumber text={' - '} colorA={'#e0e0e0'} ColorB={'#eac195'} onPress={() => handleButtonPress('-')} />
                </View>
                <View style={styles.row}>
                    <ButtonNumber text={' 1 '} colorA={'#e0e0e0'} ColorB={'#eac195'} onPress={() => handleButtonPress('1')} />
                    <ButtonNumber text={' 2 '} colorA={'#e0e0e0'} ColorB={'#eac195'} onPress={() => handleButtonPress('2')} />
                    <ButtonNumber text={' 3 '} colorA={'#e0e0e0'} ColorB={'#eac195'} onPress={() => handleButtonPress('3')} />
                    <ButtonNumber text={' + '} colorA={'#e0e0e0'} ColorB={'#eac195'} onPress={() => handleButtonPress('+')} />
                </View>
                <View style={styles.row}>
                    <ButtonNumber text={'+/-'} colorA={'#e0e0e0'} ColorB={'#eac195'} onPress={() => handleButtonPress('+/-')} />
                    <ButtonNumber text={' 0 '} colorA={'#e0e0e0'} ColorB={'#eac195'} onPress={() => handleButtonPress('0')} />
                    <ButtonNumber text={' . '} colorA={'#e0e0e0'} ColorB={'#eac195'} onPress={() => handleButtonPress('.')} />
                    <ButtonNumber text={' = '} colorA={'#e0e0e0'} ColorB={'#eac195'} onPress={() => handleButtonPress('=')} />
                </View>
            </View>
        </View>
    );
}
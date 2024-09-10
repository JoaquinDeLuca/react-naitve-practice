import { StyleSheet, Text, View } from 'react-native';
import { colors, globalStyle } from '../../config/theme/app-theme';
import { CalculatorBtn } from '../components/CalculatorBtn';
import { useCalculator } from '../hooks/useCalculator';

export const CaculatorScreen = () => {
  const {
    formula,
    prevNumber,
    buildNumber,
    toggleSign,
    clean,
    addOperation,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    calculateResult,
    deleteOperation,
  } = useCalculator();

  return (
    <View style={globalStyle.calculatorContainer}>
      <View style={{ paddingBottom: 20, paddingHorizontal: 30 }}>
        <Text
          adjustsFontSizeToFit // Que se adapate al espacio que tiene = 1 linea
          numberOfLines={1} // cuantas lineas quiero que ocupe = 1
          style={globalStyle.mainResult}>
          {formula}
        </Text>

        {(formula === prevNumber
          ? <Text style={globalStyle.subResult}> </Text>
          : <Text
            adjustsFontSizeToFit
            numberOfLines={1}
            style={globalStyle.subResult}>
            {prevNumber}
          </Text>
        )}

      </View>

      <View style={globalStyle.row}>
        <CalculatorBtn
          onPress={clean}
          label="C"
          blackText
          color={colors.ltightGray}
        />
        <CalculatorBtn
          onPress={toggleSign}
          label="+/-"
          blackText
          color={colors.ltightGray}
        />
        <CalculatorBtn
          onPress={deleteOperation}
          label="del"
          blackText
          color={colors.ltightGray}
        />
        <CalculatorBtn
          onPress={divideOperation}
          label="%"
          color={colors.orange}
        />
      </View>

      <View style={globalStyle.row}>
        <CalculatorBtn
          onPress={() => buildNumber('7')}
          label="7"
          color={colors.darkGray}
        />
        <CalculatorBtn
          onPress={() => buildNumber('8')}
          label="8"
          color={colors.darkGray}
        />
        <CalculatorBtn
          onPress={() => buildNumber('9')}
          label="9"
          color={colors.darkGray}
        />
        <CalculatorBtn
          onPress={multiplyOperation}
          label="x"
          color={colors.orange}
        />
      </View>
      <View style={globalStyle.row}>
        <CalculatorBtn
          onPress={() => buildNumber('4')}
          label="4"
          color={colors.darkGray}
        />
        <CalculatorBtn
          onPress={() => buildNumber('5')}
          label="5"
          color={colors.darkGray}
        />
        <CalculatorBtn
          onPress={() => buildNumber('6')}
          label="6"
          color={colors.darkGray}
        />
        <CalculatorBtn
          onPress={subtractOperation}
          label="-"
          color={colors.orange}
        />
      </View>
      <View style={globalStyle.row}>
        <CalculatorBtn
          onPress={() => buildNumber('1')}
          label="1"
          color={colors.darkGray}
        />
        <CalculatorBtn
          onPress={() => buildNumber('2')}
          label="2"
          color={colors.darkGray}
        />
        <CalculatorBtn
          onPress={() => buildNumber('3')}
          label="3"
          color={colors.darkGray}
        />
        <CalculatorBtn
          onPress={addOperation}
          label="+"
          color={colors.orange}
        />
      </View>
      <View style={globalStyle.row}>
        <CalculatorBtn
          onPress={() => buildNumber('0')}
          label="0"
          color={colors.darkGray}
          doobleSize={true}
        />
        <CalculatorBtn
          onPress={() => buildNumber('.')}
          label="."
          color={colors.darkGray}
        />
        <CalculatorBtn
          onPress={calculateResult}
          label="="
          color={colors.orange}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({});

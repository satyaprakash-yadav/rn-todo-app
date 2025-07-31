import useTheme from "@/hooks/useTheme";
import { ActivityIndicator, Text, View } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { createHomeStyles } from "@/assets/home.styles";

const LoadingSpinner = () => {
    const { colors } = useTheme();

    const homeStyles = createHomeStyles(colors);

    return (
        <LinearGradient
            colors={colors.gradients.background}
            style={homeStyles.container}
        >
            <View style={homeStyles.loadingContainer}>
                <ActivityIndicator size="large" color={colors.primary} />
                <Text style={homeStyles.loadingText}>Loading your todos...</Text>
            </View>
        </LinearGradient>
    )
}

export default LoadingSpinner
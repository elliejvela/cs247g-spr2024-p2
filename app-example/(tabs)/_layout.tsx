import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import React from "react";

export default function TabLayout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Drawer.Screen
                    name="index"
                    options={{
                        title: "Home",
                    }}
                />
                <Drawer.Screen
                    name="explore"
                    options={{
                        title: "Explore",
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    );
}

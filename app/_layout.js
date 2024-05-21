import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
    return (
        <Drawer>
            <Drawer.Screen
                name="index"
                options={{ drawerLabel: "Descent", title: "Descent" }}
            />
        </Drawer>
    );
}

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AddFoodView, HomeView } from '../views'
import { type RootParamList } from '../types'

const Stack = createNativeStackNavigator<RootParamList>()

export const IndexRouter = (): JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={HomeView} />
      <Stack.Screen name="AddFood" component={AddFoodView} />
    </Stack.Navigator>
  )
}

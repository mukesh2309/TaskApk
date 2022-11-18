import React, { useState, useEffect } from "react";
import {
    Center,
    Avatar,
    Flex,
    ChevronRightIcon,
    StatusBar,
    Button,
    Stack,
    Image,
    Text,
    View,
    Pressable,
    HStack,
    ScrollView,
    Box,
    Divider,
} from "native-base";
import { StyleSheet } from "react-native";
import {
    Entypo,
    Ionicons,
    FontAwesome5,
    MaterialIcons,
    FontAwesome,
    MaterialCommunityIcons,
    AntDesign,
} from "@expo/vector-icons";


const Home = () => {

    const [data, setData] = useState([])
    const [image, setImage] = useState([])
    const [credit, setCredit] = useState([])
    const [sumCredit, setSumCredit] = useState(0)
    const [selected, setSelected] = useState()

    useEffect(function () {
        fetch("https://api.klutchh.in/v1/rosters/128622/129859?game_type=false")
            .then(res => res.json())
            .then(data => setData(data.data))
    }, [])

    function getItem(item, id) {
        // setImage(item.image_url)
        if (image.length < 5) {
            setImage(current => [...current, item.image_url]);
        }
        let sum = credit.reduce((a, b) => a + b, 0)
        if (sum < 15) {
            setCredit(current => [item.credit, ...current]);
            setSumCredit(sum)
        }
        setSelected(id !== selected ? id : "")
        // console.log(id)
    }

    return (
        <Box flex={1} bg="#211134">
            <HStack px={2} py={4} justifyContent="space-between">
                <Box flex={1}>
                    <AntDesign name="left" size={20} color="#fff" />
                </Box>
                <Box flex={2}>
                    <Text fontSize={16} color="#fff" fontWeight={600}>Create Team</Text>
                </Box>
            </HStack>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                flex={1}
            >
                <Box flex={1} >
                    <Box px={2}>
                        <HStack py={2} justifyContent="center" space={2} >
                            {
                                image?.map((item, index) => {
                                    return (
                                        <Center borderRadius={8} size={12} bg="#FF326A">
                                            {
                                                item ? <Image source={{
                                                    uri: `${item}`
                                                }} alt="Alternate Text"
                                                    borderRadius={8}
                                                    size={8} /> : <Center borderRadius={8} size={12} bg="#FF326A">
                                                    <FontAwesome name="question" size={22} color="#fff" />
                                                </Center>
                                            }
                                        </Center>

                                    )
                                })
                            }
                        </HStack>
                        <Center py={3}>
                            <Text fontSize={12} color="#fff" fontWeight={600}>Choose five players to join your team</Text>
                        </Center>
                        <Center>
                            <HStack py={2} px={4} borderRadius={24} borderWidth={1} borderColor="#EBEBF5" bgColor="#6741d9">
                                <Text fontSize={12} color="#fff" fontWeight={600}>CREDITS LEFT : </Text>
                                <Text fontSize={12} color="#fff" fontWeight={600}>{sumCredit}</Text>
                            </HStack>
                        </Center>
                    </Box>
                    <HStack justifyContent="space-between" alignItems="center">
                        <HStack space={2} alignItems="center" my={2} py={2} >
                            <HStack alignItems="center">
                                <Box mr={-2} bg="#FFEE00" py={2} px={6} size={8}>

                                </Box>
                                <Center borderWidth={1} borderColor="#fff" size={12} bg="#211134" borderRadius={100}>
                                    <Image
                                        size={8}
                                        source={require("../../assets/team1.png")}
                                    />
                                </Center>
                            </HStack>
                            <Text color="#fff" fontSize={12}>Team Liquid</Text>
                        </HStack>
                        <Image
                            size={6}
                            source={require("../../assets/VS.png")}
                        />
                        <HStack space={2} alignItems="center" my={2} py={2} >
                            <Text color="#fff" fontSize={12}>Sentinels</Text>
                            <HStack alignItems="center">
                                <Center zIndex={1} borderWidth={1} borderColor="#fff" size={12} bg="#211134" borderRadius={100}>
                                    <Image
                                        size={8}
                                        source={require("../../assets/team2.png")}
                                    />
                                </Center>
                                <Box ml={-2} bg="#CE0037" py={2} px={6} size={8}></Box>
                            </HStack>
                        </HStack>
                    </HStack>
                    <Stack py={4} space={2} px={3}>
                        <HStack space={2} justifyContent="space-between" alignItems="center" >
                            <Stack space={4}>
                                {
                                    data.roster1?.map((e, i) => {
                                        return (
                                            <Pressable onPress={() => getItem(e, e._id)}>
                                                <HStack alignItems="center" justifyContent="space-between" borderWidth={1} borderColor={selected == e._id ? "orange.500" : "#fff"} borderRadius={8} bg="#6741d9">
                                                    {
                                                        e.image_url !== null ? <Image source={{
                                                            uri: `${e.image_url}`
                                                        }} alt="Alternate Text"
                                                            borderLeftRadius={8}
                                                            size={16} /> : <Image source={{
                                                                uri: "https://wallpaperaccess.com/full/317501.jpg"
                                                            }} alt="Alternate Text"
                                                                borderLeftRadius={8}
                                                                size={16} />
                                                    }
                                                    <Stack pt={2} justifyContent="space-between">
                                                        <Stack px={4}>
                                                            <Text fontSize={12} fontWeight={600} color="#fff">
                                                                {e.name}
                                                            </Text>
                                                            <Text fontSize={10} color="#fff">
                                                                K/D {e.first_kill_percentage}
                                                            </Text>
                                                        </Stack>
                                                        <HStack px={6} borderRightRadius={8} py={1} bgColor="#1E1F58">
                                                            <Text fontSize={12} color="#FF326A">{e.credit} Credits</Text>
                                                        </HStack>
                                                    </Stack>
                                                </HStack>
                                            </Pressable>
                                        )
                                    })
                                }
                            </Stack>
                            <Stack space={4}>
                                {
                                    data.roster2?.map((e, i) => {
                                        return (
                                            <Pressable onPress={() => getItem(e, e._id)}>
                                                <HStack alignItems="center" justifyContent="space-between" borderWidth={1} borderColor={selected == e._id ? "orange.500" : "#fff"} borderRadius={8} bg="#6741d9">
                                                    {
                                                        e.image_url !== null ? <Image source={{
                                                            uri: `${e.image_url}`
                                                        }} alt="Alternate Text"
                                                            borderLeftRadius={8}
                                                            size={16} /> : <Image source={{
                                                                uri: "https://wallpaperaccess.com/full/317501.jpg"
                                                            }} alt="Alternate Text"
                                                                borderLeftRadius={8}
                                                                size={16} />
                                                    }
                                                    <Stack pt={2} justifyContent="space-between">
                                                        <Stack px={4}>
                                                            <Text fontSize={12} fontWeight={600} color="#fff">
                                                                {e.name}
                                                            </Text>
                                                            <Text fontSize={10} color="#fff">
                                                                K/D {e.first_kill_percentage}
                                                            </Text>
                                                        </Stack>
                                                        <HStack px={6} borderRightRadius={8} py={1} bgColor="#1E1F58">
                                                            <Text fontSize={12} color="#FF326A">{e.credit} Credits</Text>
                                                        </HStack>
                                                    </Stack>
                                                </HStack>
                                            </Pressable>
                                        )
                                    })
                                }
                            </Stack>
                        </HStack>
                    </Stack>
                    <Box px={2} py={2} mb={2}>
                        <Button bgColor="#FF326A" borderRadius={12}>
                            <Text color="#fff" fontWeight={600}>
                                PREVIEW SELECTION
                            </Text>
                        </Button>
                    </Box>
                </Box>
            </ScrollView>
        </Box>
    );
}

export default Home;

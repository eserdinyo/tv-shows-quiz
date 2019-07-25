import { seriesRef } from "@/firebase";
import firebase from 'firebase';

export default {
    getAllSeries({ commit }) {
        return new Promise((resolve, reject) => {
            // GET DATA FROM FIRESTORE
            seriesRef.get().then(snapshot => {
                const data = snapshot.docs.map(res => {
                    const data = res.data();
                    data.id = res.id;
                    return data;
                });

                commit('SET_SERIES', data)
                resolve(data);
            })
        })
    },
    getOneShow({ commit }, id) {
        return new Promise((resolve, reject) => {
            seriesRef
                .doc(id)
                .get().then(res => {
                    commit('SET_ONE_SHOW', res.data());
                    resolve(res);
                })

        })

    },
    addShow({ _ }, payload) {
        // ADD DATA TO FIRESTORE
        return new Promise((resolve, reject) => {
            seriesRef
                .add({
                    name: payload.name,
                    coverImage: payload.coverImage,
                    bgImage: payload.bgImage,
                    music: payload.music
                }).then(res => {
                    resolve(res)
                })
        })
    },
    addCharacter({ _ }, payload) {
        return new Promise((resolve, reject) => {
            const data = {
                name: payload.character.name,
                imageUrl: payload.character.imageUrl,
                answers: payload.character.answers
            }
            seriesRef
                .doc(payload.id).update({
                    characters: firebase.firestore.FieldValue.arrayUnion(data)
                }).then(res => {
                    if (!res)
                        resolve(200)
                })
        })
    }
}
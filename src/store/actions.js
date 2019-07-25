import { seriesRef } from "@/firebase";
import firebase from 'firebase';

export default {
	getAllSeries({ commit }) {
		// GET DATA FROM FIRESTORE
		return seriesRef.get().then(snapshot => {
			const series = snapshot.docs.map(res => {
				const data = res.data();
				data.id = res.id;
				return data;
			});

			commit('SET_SERIES', series)
			return series;
		})
	},
	getOneShow({ commit }, id) {
		return seriesRef
			.doc(id)
			.get().then(res => {
				commit('SET_ONE_SHOW', res.data());
				return res;
			})
	},
	addShow(_, payload) {
		// ADD DATA TO FIRESTORE
		return seriesRef
			.add({
				name: payload.name,
				coverImage: payload.coverImage,
				bgImage: payload.bgImage,
				music: payload.music
			}).then(res => res.data)
	},
	addCharacter(_, payload) {
		const data = {
			name: payload.character.name,
			imageUrl: payload.character.imageUrl,
			answers: payload.character.answers
		}
		return seriesRef
			.doc(payload.id).update({
				characters: firebase.firestore.FieldValue.arrayUnion(data)
			}).then(res => !res ? res : "")
	}
}
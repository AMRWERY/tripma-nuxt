import { defineStore } from "pinia";
import { getDocs, collection, query } from "firebase/firestore";
import { db } from "@/firebase/config";

export const useOfferDealsStore = defineStore("offerDeals", {
  state: () => {
    return {
      places: [],
    };
  },

  actions: {
    async fetchPlaces() {
      const querySnap = await getDocs(query(collection(db, "placesToStay")));
      let product = [];
      querySnap.forEach((doc) => {
        let pro = {
          id: doc.id,
          ...doc.data(),
        };
        product.push(pro);
      });
      this.places = product;
    },
  },
});

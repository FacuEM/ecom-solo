import { firestore } from "./../../firebase/utils";

export const handleAddProduct = (product) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("products")
      .doc()
      .set(product)
      .then(() => resolve())
      .catch((err) => reject(err));
  });
};

export const handleFetchProducts = ({
  filterType,
  startAfterDoc,
  presistProducts = [],
}) => {
  return new Promise((resolve, reject) => {
    const pageSize = 6;

    let ref = firestore
      .collection("products")
      .orderBy("createdDate")
      .limit(pageSize);

    if (filterType) ref = ref.where("productCategory", "==", filterType);
    if (startAfterDoc) ref = ref.startAfter(startAfterDoc);

    ref
      .get()
      .then((snapshot) => {
        const totalCout = snapshot.size;
        const data = [
          ...presistProducts,
          ...snapshot.docs.map((doc) => {
            return {
              ...doc.data(),
              documentID: doc.id,
            };
          }),
        ];
        resolve({
          data,
          queryDoc: snapshot.docs[totalCout - 1],
          isLastPage: totalCout < 1,
        });
      })
      .catch((err) => reject(err));
  });
};

export const handleDeleteProduct = (documentID) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("products")
      .doc(documentID)
      .delete()
      .then(() => resolve())
      .catch((err) => reject(err));
  });
};

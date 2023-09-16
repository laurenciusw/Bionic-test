function selisih(arr) {
  let maxDiff = arr[1] - arr[0];
  let minElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    const currentDiff = arr[i] - minElement;
    maxDiff = Math.max(maxDiff, currentDiff);
    minElement = Math.min(minElement, arr[i]);
  }

  return maxDiff;
}

const harga = [10, 7, 5, 8, 11, 9, 1];
const maxSelisih = selisih(harga);
console.log("Hasil selisih terbesar:", maxSelisih);

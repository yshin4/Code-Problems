class HashTable {

    constructor() {
        const b = 10;
        this.bucketArray = new Array(b);
        this.numberOfItems = 0;
    }

    hashFunction(key) {
        return key.length % bucketArray.length;
    }

    insert(key, value) {
        this.openAddress(key, value);
        this.numberOfItems += 1;
        this.resize(this.bucketArray.length);
    }

    resize(startLength) {
        while (this.numberOfItems / this.bucketArray.length >= 0.7) {
            this.bucketArray.length += 1;
        }
        if (startLength < this.bucketArray.length) {
            this.rehash();
        }
    }

    rehash() {
        const tempArray = this.bucketArray;
        this.bucketArray = new Array (tempArray.length);
        for (let b in tempArray) {
            openAddress(b.key, b.value);
        }
    }

    openAddress(key, value) {
        let index = this.hashFunction(key);
        while (this.bucketArray[index]) {
            if(this.bucketArray[index].key === key) {
                throw new Exception("This item already exist in the Hash Table");
            }
            index += 1;
            index %= this.bucketArray.length;
        }
        this.bucketArray[index] = {value, key};
    }

    get(key) {
        const index = this.hashFunction(key);
        while (this.bucketArray(index)) {
            if (this.bucketArray(index).key === key) {
                return this.bucketArray(index);
            }
            index += 1;
            index %= this.bucketArray.length;
        }
        throw new Exception("This item is not stored in the Hash Table.");
    }

}

const hs = new HashTable();
const a = ["Justin", "jen", "Marc", "Tyler", "Anthony", "Danica", "Alejandro"];
for (name in a) {
    hs.insert(name, name);
}


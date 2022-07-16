const laranja = {
	preco: 3,
};

const maca = {
	preco: 2,
};

function mapArray(arr, thisArg) {
	return arr.map(function (item) {
	    return item * this.preco;  //multiplica cada item do array e lança num array novo
	}, thisArg);
}

const nums = [1, 2];

console.log('this -> maçã', mapArray(nums, maca));

console.log('this -> laranja', mapArray(nums, laranja));

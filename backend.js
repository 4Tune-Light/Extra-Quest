const dictionary = () => {
	const cases = ['pro', 'gram', 'merit', 'program', 'it', 'programmer']

	let arrDict = []
	for (i = 0; i < cases.length; i++) {
		let arr = [cases[i]]
		for (j = 0; j < cases.length; j++) {
			let include = false

			if (j !== i) {
				include = cases[i].includes(cases[j])
			}

			if (include === true) {
				arr.push(cases[j])
			}
		}
		arrDict.push(arr)
	}

	let newArr = []
	for (i = 0; i < arrDict.length; i++) {
		let match = false
		let newArrData = arrDict.sort(function(a,b){ return a.length - b.length })

		for (j = 0; j < newArrData.length; j++) {
			for (k = 0; k < newArrData.length; k++) {
				for (l = 0; l < newArrData.length; l++) {
					if (i !== k) {
						if ( typeof newArrData[i][j] !== 'undefined' &&
								 typeof newArrData[k][l] !== 'undefined' &&
								 newArrData[i][j] === newArrData[k][l]
							 ) {
							if (newArrData[i].length < newArrData[k].length) {
								match = true
							}
						}
					}
				}
			}
		}
		

		if (match === false) {
			newArr.push(newArrData[i])
		}
	}
	console.log(newArr)
	

	for (i = 0; i < newArr.length; i++) {
		
	}
}

dictionary()
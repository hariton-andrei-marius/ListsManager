// Events

// ADD

$addGlobal.on('click', function ()
{
	$suggestionsGlobal.css('display', 'block');

	/*
	switch(prompt('Choose list: "home" or "car"', ''))
	{
	case 'home':
	homeList.push( $inputGlobal.val() );
	$updateList($listHome, $templateListItem, homeList);
	break;
	case 'car':
	carList.push( $inputGlobal.val() );
	$updateList($listCar, $templateListItem, carList);
	break;
	}
	$inputGlobal.val('');
	*/
});

$addHome.on('click', function ()
{
	homeList.push( $inputHome.val() );

	$inputHome.val('');

	$updateList($listHome, $templateListItem, homeList);
});

$addCar.on('click', function ()
{
	carList.push( $inputCar.val() );

	$inputCar.val('');

	$updateList($listCar, $templateListItem, carList);
});

// REMOVE

$removeGlobal.on('click', function ()
{
	if($isRemovable(homeList, $inputGlobal.val()))
	{
		homeList = $deleteElement(homeList, $inputGlobal.val() );
		$updateList($listHome, $templateListItem, homeList);
	}
	else if($isRemovable(carList, $inputGlobal.val()))
	{
		carList = $deleteElement(carList, $inputGlobal.val() );
		$updateList($listCar, $templateListItem, carList);
	}

	$inputGlobal.val('');
});

$removeHome.on('click', function ()
{
	homeList = $deleteElement(homeList, $inputHome.val() );

	$inputHome.val('');

	$updateList($listHome, $templateListItem, homeList);
});

$removeCar.on('click', function ()
{
	carList = $deleteElement(carList, $inputCar.val() );

	$inputCar.val('');

	$updateList($listCar, $templateListItem, carList);
});

// INPUT

$inputGlobal.on('keyup', function ()
{
	if($inputGlobal.val().length > 2)
	{
		$addGlobal.removeAttr('disabled');
		$removeGlobal.removeAttr('disabled');

		// Check removable
		if($isRemovable(homeList.concat(carList), $inputGlobal.val()))
		{
			$addGlobal.attr('disabled', 'true');
			$removeGlobal.removeAttr('disabled');
		}
		else
		{
			$addGlobal.removeAttr('disabled');
			$removeGlobal.attr('disabled', 'true');
		}
	}
	else
	{
		$addGlobal.attr('disabled', 'true');
		$removeGlobal.attr('disabled', 'true');
	}
});

$inputHome.on('keyup', function ()
{
	if($inputHome.val().length > 2)
	{
		$addHome.removeAttr('disabled');
		$removeHome.removeAttr('disabled');

		// Check removable
		if($isRemovable(homeList, $inputHome.val()))
		{
			$addHome.attr('disabled', 'true');
			$removeHome.removeAttr('disabled');
		}
		else
		{
			$addHome.removeAttr('disabled');
			$removeHome.attr('disabled', 'true');
		}
	}
	else
	{
		$addHome.attr('disabled', 'true');
		$removeHome.attr('disabled', 'true');
	}
});

$inputCar.on('keyup', function ()
{
	if($inputCar.val().length > 2)
	{
		$addCar.removeAttr('disabled');
		$removeCar.removeAttr('disabled');

		// Check removable
		if($isRemovable(carList, $inputCar.val()))
		{
			$addCar.attr('disabled', 'true');
			$removeCar.removeAttr('disabled');
		}
		else
		{
			$addCar.removeAttr('disabled');
			$removeCar.attr('disabled', 'true');
		}
	}
	else
	{
		$addCar.attr('disabled', 'true');
		$removeCar.attr('disabled', 'true');
	}
});

// SUGGESTIONS

$suggestionsGlobalToHome.click(function () {//debugger;
	homeList.push( $inputGlobal.val() );
	$updateList($listHome, $templateListItem, homeList);
	$inputGlobal.val('');
	$suggestionsGlobal.css('display', 'none');
});

$suggestionsGlobalToCar.click(function () {
	carList.push( $inputGlobal.val() );
	$updateList($listCar, $templateListItem, carList);
	$inputGlobal.val('');
	$suggestionsGlobal.css('display', 'none');
});

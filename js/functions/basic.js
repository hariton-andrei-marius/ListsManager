// Functions

var $addItem = function ($wrapper, $item, $content)
{
	$newItem = $item.clone();
	$newItem.append($content);
	$wrapper.append($newItem);
};

var $updateList = function ($listToFill, $itemToAdd, arrayWithContent)
{
	$listToFill.empty();

	for(var i = 0; i < arrayWithContent.length; i++)
	{
		$addItem($listToFill, $itemToAdd, arrayWithContent[i]);
	}
};

var $deleteElement = function (array, elementToDelete)
{
	var tempArray = [];

	for(var i = 0; i < array.length; i++)
	{
		if(array[i] !== elementToDelete)
		{
			tempArray.push(array[i]);
		}
	}

	return tempArray;
};

var $isRemovable = function(array, element)
{
	for(var i = 0; i < array.length; i++)
	{
		if(array[i] === element)
		{
			return true;
		}
	}

	return false;
};

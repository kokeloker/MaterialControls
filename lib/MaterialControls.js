exports.createBigCheckBox = function(){
	var view = Ti.UI.createView({
		width: 40,
		height: 40
	});
	var box = Ti.UI.createView({
		width: 40,
		height: 40,
		borderColor: "#f2f2f2",
		borderWidth: 2		
	});
    var check = Ti.UI.createView({
    	width: 40,
		height: 40,
		top: 4,
		left: -1,
		backgroundImage: "/MaterialControls/CheckBox/checkedBig.png",
		opacity: 0
    });    
    view.add(box);
    view.add(check);
    var matrixTransform = Ti.UI.create2DMatrix();
    var boxInAnim = Ti.UI.createAnimation({
    	duration : 250,
        opacity : 1,
        transform: matrixTransform.rotate(0)
    });
    var boxOutAnim = Ti.UI.createAnimation({
    	duration : 125,
        opacity : 0,
        transform: matrixTransform.rotate(-45)
    });
    var checkInAnim = Ti.UI.createAnimation({
    	duration : 200,
        opacity : 1,
        transform: matrixTransform.rotate(-45).scale(0.8333334).translate(10, -15)
    });
    var checkOutAnim = Ti.UI.createAnimation({
        duration : 200,
        opacity : 0,
        transform: matrixTransform.rotate(0).scale(1.2).translate(-10, 15)
    });
    function togglecheck () {
        if(!view.checked) {
            view.checked = true;    
		    check.animate(checkInAnim);		    
		    box.animate(boxOutAnim);
        }
        else {
            view.checked = false;   
		    check.animate(checkOutAnim);		    
		    box.animate(boxInAnim);
        }           
    }
    view.addEventListener("click",togglecheck);
    return view;
};

exports.createMediumCheckBox = function(){
	var view = Ti.UI.createView({
		width: 30,
		height: 30
	});
	var box = Ti.UI.createView({
		width: 30,
		height: 30,
		borderColor: "#f2f2f2",
		borderWidth: 2		
	});
    var check = Ti.UI.createView({
    	width: 30,
		height: 30,
		top: 2,
		left: -1,
		backgroundImage: "/MaterialControls/CheckBox/checkedMedium.png",
		opacity: 0
    });    
    view.add(box);
    view.add(check);
    var matrixTransform = Ti.UI.create2DMatrix();
    var boxInAnim = Ti.UI.createAnimation({
    	duration : 250,
        opacity : 1,
        transform: matrixTransform.rotate(0)
    });
    var boxOutAnim = Ti.UI.createAnimation({
    	duration : 125,
        opacity : 0,
        transform: matrixTransform.rotate(-45)
    });
    var checkInAnim = Ti.UI.createAnimation({
    	duration : 200,
        opacity : 1,
        transform: matrixTransform.rotate(-45).scale(0.8333334).translate(5, -7)
    });
    var checkOutAnim = Ti.UI.createAnimation({
        duration : 200,
        opacity : 0,
        transform: matrixTransform.rotate(0).scale(1.2).translate(-5, 7)
    });
    function togglecheck () {
        if(!view.checked) {
            view.checked = true;    
		    check.animate(checkInAnim);		    
		    box.animate(boxOutAnim);
        }
        else {
            view.checked = false;   
		    check.animate(checkOutAnim);		    
		    box.animate(boxInAnim);
        }           
    }
    view.addEventListener("click",togglecheck);
    return view;
};

exports.createSmallCheckBox = function(){
	var view = Ti.UI.createView({
		width: 20,
		height: 20
	});
	var box = Ti.UI.createView({
		width: 20,
		height: 20,
		borderColor: "#f2f2f2",
		borderWidth: 2		
	});
    var check = Ti.UI.createView({
    	width: 20,
		height: 20,
		top: 1,
		left: -1,
		backgroundImage: "/MaterialControls/CheckBox/checkedSmall.png",
		opacity: 0
    });    
    view.add(box);
    view.add(check);
    var matrixTransform = Ti.UI.create2DMatrix();
    var boxInAnim = Ti.UI.createAnimation({
    	duration : 250,
        opacity : 1,
        transform: matrixTransform.rotate(0)
    });
    var boxOutAnim = Ti.UI.createAnimation({
    	duration : 125,
        opacity : 0,
        transform: matrixTransform.rotate(-45)
    });
    var checkInAnim = Ti.UI.createAnimation({
    	duration : 200,
        opacity : 1,
        transform: matrixTransform.rotate(-45).scale(0.8333334).translate(2.5, -4)
    });
    var checkOutAnim = Ti.UI.createAnimation({
        duration : 200,
        opacity : 0,
        transform: matrixTransform.rotate(0).scale(1.2).translate(-2.5, 4)
    });
    function togglecheck () {
        if(!view.checked) {
            view.checked = true;    
		    check.animate(checkInAnim);		    
		    box.animate(boxOutAnim);
        }
        else {
            view.checked = false;   
		    check.animate(checkOutAnim);		    
		    box.animate(boxInAnim);
        }           
    }
    view.addEventListener("click",togglecheck);
    return view;
};


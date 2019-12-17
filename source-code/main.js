$(document).ready(() => {

    const setActiveButton = (id) => {
        $('input[type="button"]').removeClass('active');
        $(id).addClass('active');
    }

    const FLEX_ROW_CLASS = 'flex-row';
    const FLEX_ROW_REVERSE_CLASS = 'flex-row-reverse';
    const FLEX_COLUMN_CLASS = 'flex-column';
    const FLEX_COLUMN_REVERSE_CLASS = 'flex-column-reverse';

    const FLEX_WRAP_NO_WRAP = 'flex-wrap-nowrap';
    const FLEX_WRAP_WRAP = 'flex-wrap-wrap';
    const FLEX_WRAP_WRAP_REVERSE = 'flex-wrap-wrap-reverse';

    const addFlexClass = (chosenClass) => {
        $('.content').addClass(chosenClass);
    }

    const removeAllFlexDirectionAndAddClass = (chosenClass) => {
        $('.content').removeClass(FLEX_ROW_CLASS);
        $('.content').removeClass(FLEX_ROW_REVERSE_CLASS);
        $('.content').removeClass(FLEX_COLUMN_CLASS);
        $('.content').removeClass(FLEX_COLUMN_REVERSE_CLASS);

        addFlexClass(chosenClass);
    }

    const removeAllFlexWrap = () => {
        $('.content').removeClass(FLEX_WRAP_NO_WRAP);
        $('.content').removeClass(FLEX_WRAP_WRAP);
        $('.content').removeClass(FLEX_WRAP_WRAP_REVERSE);
    }
    


    $('#bt-row').on('click', () => {
        removeAllFlexDirectionAndAddClass(FLEX_ROW_CLASS);
    });
    $('#bt-row-reverse').on('click', () => {
        removeAllFlexDirectionAndAddClass(FLEX_ROW_REVERSE_CLASS);
    });
    $('#bt-column').on('click', () => {
        removeAllFlexDirectionAndAddClass(FLEX_COLUMN_CLASS);
    });
    $('#bt-column-reverse').on('click', () => {
        removeAllFlexDirectionAndAddClass(FLEX_COLUMN_REVERSE_CLASS);
    });

    $('#bt-wrap-nowrap').on('click', () => {
        removeAllFlexWrap();
        addFlexClass(FLEX_WRAP_NO_WRAP);
    });

    $('#bt-wrap-wrap').on('click', () => {
        removeAllFlexWrap();
        addFlexClass(FLEX_WRAP_WRAP);
    });

    $('#bt-wrap-wrap-reverse').on('click', () => {
        removeAllFlexWrap();
        addFlexClass(FLEX_WRAP_WRAP_REVERSE);
    });
    
    const FLEX_JUSTIFY_FLEX_START = 'flex-justify-flex-start';
    const FLEX_JUSTIFY_FLEX_END = 'flex-justify-flex-end';
    const FLEX_JUSTIFY_CENTER = 'flex-justify-center';
    const FLEX_JUSTIFY_SPACE_BETWEEN = 'flex-justify-space-between';
    const FLEX_JUSTIFY_SPACE_AROUND = 'flex-justify-space-around';
    const FLEX_JUSTIFY_SPACE_EVENLY = 'flex-justify-space-evenly';

    const removeAllFlexJustifyAndAddClass = (chosenClass) => {
        $('.content').removeClass(FLEX_JUSTIFY_FLEX_START);
        $('.content').removeClass(FLEX_JUSTIFY_FLEX_END);
        $('.content').removeClass(FLEX_JUSTIFY_CENTER);
        $('.content').removeClass(FLEX_JUSTIFY_SPACE_BETWEEN);
        $('.content').removeClass(FLEX_JUSTIFY_SPACE_AROUND);
        $('.content').removeClass(FLEX_JUSTIFY_SPACE_EVENLY);

        addFlexClass(chosenClass);
    }

    $('#flex-justify-flex-start').on('click', () => {
        removeAllFlexJustifyAndAddClass(FLEX_JUSTIFY_FLEX_START);
        setActiveButton('#flex-justify-flex-start');
    })
    $('#flex-justify-flex-end').on('click', () => {
        removeAllFlexJustifyAndAddClass(FLEX_JUSTIFY_FLEX_END);
        setActiveButton('#flex-justify-flex-end');
    })
    $('#flex-justify-center').on('click', () => {
        removeAllFlexJustifyAndAddClass(FLEX_JUSTIFY_CENTER);
        setActiveButton('#flex-justify-center');
    })
    $('#flex-justify-space-between').on('click', () => {
        removeAllFlexJustifyAndAddClass(FLEX_JUSTIFY_SPACE_BETWEEN);
        setActiveButton('#flex-justify-space-between');
    })
    $('#flex-justify-space-around').on('click', () => {
        removeAllFlexJustifyAndAddClass(FLEX_JUSTIFY_SPACE_AROUND);
        setActiveButton('#flex-justify-space-around');
    })
    $('#flex-justify-space-evenly').on('click', () => {
        removeAllFlexJustifyAndAddClass(FLEX_JUSTIFY_SPACE_EVENLY);
        setActiveButton('#flex-justify-space-evenly');
    })

    const FLEX_ALIGN_ITEMS_STRETCH = 'flex-align-items-stretch';
    const FLEX_ALIGN_ITEMS_FLEX_START = 'flex-align-items-flex-start';
    const FLEX_ALIGN_ITEMS_FLEX_END = 'flex-align-items-flex-end';
    const FLEX_ALIGN_ITEMS_CENTER = 'flex-align-items-center';
    const FLEX_ALIGN_ITEMS_BASELINE = 'flex-align-items-baseline';

    const removeAllFlexAlignItemsAndAddClass = (chosenClass) => {
        $('.content').removeClass(FLEX_ALIGN_ITEMS_STRETCH);
        $('.content').removeClass(FLEX_ALIGN_ITEMS_FLEX_START);
        $('.content').removeClass(FLEX_ALIGN_ITEMS_FLEX_END);
        $('.content').removeClass(FLEX_ALIGN_ITEMS_CENTER);
        $('.content').removeClass(FLEX_ALIGN_ITEMS_BASELINE);

        if (chosenClass === FLEX_ALIGN_ITEMS_STRETCH) {
            $('.bordered-square').addClass('auto-height');
        } else {
            $('.bordered-square').removeClass('auto-height');
        }

        addFlexClass(chosenClass);
    }

    $('#flex-align-items-stretch').on('click', () => {
        removeAllFlexAlignItemsAndAddClass(FLEX_ALIGN_ITEMS_STRETCH);
    });
    $('#flex-align-items-flex-start').on('click', () => {
        removeAllFlexAlignItemsAndAddClass(FLEX_ALIGN_ITEMS_FLEX_START);
    });
    $('#flex-align-items-flex-end').on('click', () => {
        removeAllFlexAlignItemsAndAddClass(FLEX_ALIGN_ITEMS_FLEX_END);
    });
    $('#flex-align-items-center').on('click', () => {
        removeAllFlexAlignItemsAndAddClass(FLEX_ALIGN_ITEMS_CENTER);
    });
    $('#flex-align-items-baseline').on('click', () => {
        removeAllFlexAlignItemsAndAddClass(FLEX_ALIGN_ITEMS_BASELINE);
    });

    //TODO: Implementar no Javascript
    //TODO: Criar html de align-content
/*
flex-start
flex-end
center
space-between
space-around
space-evenly
stretch
*/
  
});
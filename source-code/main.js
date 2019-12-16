$(document).ready(() => {

    const FLEX_ROW_CLASS = 'flex-row';
    const FLEX_ROW_REVERSE_CLASS = 'flex-row-reverse';
    const FLEX_COLUMN_CLASS = 'flex-column';
    const FLEX_COLUMN_REVERSE_CLASS = 'flex-column-reverse';

    const removeAllAndAddClass = (chosenClass) => {
        $('.content').removeClass(FLEX_ROW_CLASS);
        $('.content').removeClass(FLEX_ROW_REVERSE_CLASS);
        $('.content').removeClass(FLEX_COLUMN_CLASS);
        $('.content').removeClass(FLEX_COLUMN_REVERSE_CLASS);

        $('.content').addClass(chosenClass);
    }

    $('#bt-row').on('click', () => {
        removeAllAndAddClass(FLEX_ROW_CLASS);
    });
    $('#bt-row-reverse').on('click', () => {
        removeAllAndAddClass(FLEX_ROW_REVERSE_CLASS);
    });
    $('#bt-column').on('click', () => {
        removeAllAndAddClass(FLEX_COLUMN_CLASS);
    });
    $('#bt-column-reverse').on('click', () => {
        removeAllAndAddClass(FLEX_COLUMN_REVERSE_CLASS);
    });
});
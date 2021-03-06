export const IS_DEBUG = (() => {
    const match = location.href.match(/localhost/);
    return match && match.length > 0;
})();

export const VERSION = '1.0.0';

export const DPR = 2;

export const DESIGN_WIDTH = 375;

export const STORE_KEY = {
    TORN_DATE: 'tornDate',
    HISTORY_PAGE: 'historyPage',
    FIRST_OPEN: 'firstOpen',
    FIRST_TEAR: 'firstTear'
};

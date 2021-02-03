import * as ProductApiUtil from '.././util/product_api_util';

export const RECEIVE_ALL_PRODUCTS = 'RECEIVE_ALL_PRODUCTS';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export const receiveProducts = (products) => {
    // debugger
    return {
        type: RECEIVE_ALL_PRODUCTS,
        products
    }
};

export const receiveProduct = (product) => {
    return {
        type: RECEIVE_PRODUCT,
        product
    }
};

export const removeProduct = (productId) => {
    return {
        type: REMOVE_PRODUCT,
        productId
    }
};

export const fetchProducts = () => {
    return dispatch => {
        return ProductApiUtil.fetchProducts().then(products => {
            dispatch(receiveProducts(products))
        })
    }
}

export const fetchProduct = (productId) => {
    return dispatch => {
        return ProductApiUtil.fetchProduct(productId).then(product => {
            dispatch(receiveProduct(product))
        })
    }
}

export const createProduct = (product) => {
    return dispatch => {
        return ProductApiUtil.createProduct(product).then(product => {
            dispatch(receiveProduct(product))
        })
    }
}

export const updateProduct = (product) => {
    return dispatch => {
        return ProductApiUtil.updateProduct(product).then(product => {
            dispatch(receiveProduct(product))
        })
    }
}

export const deleteProduct = (productId) => {
    return dispatch => {
        return ProductApiUtil.deleteProduct(productId).then(() => {
            dispatch(removeProduct(productId))
        })
    }
}
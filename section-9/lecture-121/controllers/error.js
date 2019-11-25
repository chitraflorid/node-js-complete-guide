/*
 ***************************************************************
 *                                                             *
 * error.js                                                    *
 *                                                             *
 * Robert Hieger                                               *
 * November 25, 2019                                           *
 *                                                             *
 * This module contains the controller to present a 404        *
 * page error.                                                 *
 *                                                             *
 ***************************************************************
*/

exports.get404 = (req, res, next) => {

    res.status(404).render('404',

        {

            pageTitle: 'Page Not Found',
            path: '/404'

        } );    // end res.status(404).render('404')

};  // end exports.get404()

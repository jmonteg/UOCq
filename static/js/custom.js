/**
 * JavaScript Get URL Parameter
 * 
 * @param String prop The specific URL parameter you want to retreive the value for
 * @return String|Object If prop is provided a string value is returned, otherwise an object of all properties is returned
 */
function getUrlParams( prop ) {
    var params = {};
    var search = decodeURIComponent( window.location.href.slice( window.location.href.indexOf( '?' ) + 1 ) );
    var definitions = search.split( '&' );

    definitions.forEach( function( val, key ) {
        var parts = val.split( '=', 2 );
        params[ parts[ 0 ] ] = parts[ 1 ];
    } );

    return ( prop && prop in params ) ? params[ prop ] : params;
}

if(getUrlParams("cms")==="true"){
	console.log("loading cms objects...")
    var path = window.location.pathname;
    path = path.split("/").filter(function(it){
        if(it){
            return it
        }
    });
    
    if(path.length>0){
        var newlink = $("#cms-editor-link").attr("href").replace("@@collection@@", path[0]);
        if(path.length>1){
            newlink = newlink.replace("@@entry@@", path[1]);
        }else{
            newlink = newlink.replace("/entries/@@entry@@", "");
        }
        $("#cms-editor-link").attr("href", newlink)
        $("#cms-editor").css("display","block")
    }

}
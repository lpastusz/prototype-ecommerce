
function updateSearchProducts()
{
    var $input = $('#JS_main_search_row');
    var value  = $input.val();
    if ($.trim(value))
    {
        $('#JS_search_result').show(0);
        $('#JS_homepage_content').hide(0);
        $.ajax({
            url: 'api/getProducts/' + value,
            dataType: 'json',
            success: function(data) {
                $('#JS_search_result').html('');

                // here it would be nice to use react.js
                if (data.products)
                {
                    $.each(data.products, function(index, product) {
                        $('#JS_search_result').append(
                            "<div class='prod-one'>"+
                                "<a class='img' href='"+ product.url.value + "'>"+
                                    "<img src='" + product.mainImage.src + "' />"+
                                "</a>"+
                                "<h3><a class='text' href='"+ product.url.value + "'>"+
                                    product.name +
                                "</a></h3>"+
                                "<div class='row-price'>"+
                                    "<div class='stock'>"+
                                        ((product.inStock) ? 'in stock' : '') +
                                    "</div>" +
                                    "<div class='price'>"+
                                        "$" + product.price +
                                    "</div>" +
                                "</div>" +
                                "<div class='clear'></div>"+
                            "</div>");
                    });
                }

                if (data.message)
                {
                    var message = data.message;
                    $('#JS_search_result').append(
                        "<div class='message " + message.type + "'>"+
                        message.text+
                        "</div>");
                }
            }
        })
    }
    else
    {
        $('#JS_search_result').hide(0);
        $('#JS_homepage_content').show(0);
    }
}

$(function() {
    $(document).on('keyup onpaste', '#JS_main_search_row', function(e) {
        updateSearchProducts();
    })
    $(document).on('submit', '#JS_main_search_row_form', function(e) {
        updateSearchProducts();
        e.preventDefault();
    })
});

<script type="text/javascript">
 $(document).ready(function () {
            $(".paragraph > a").click(function() {
                var ul = $(this).next(),
                        clone = ul.clone().css({"height":"auto"}).appendTo(".left_menu"),
                        height = ul.css("height") === "0px" ? ul[0].scrollHeight + "px" : "0px";
                clone.remove();
                ul.animate({"height":height});
                return false;
            });
            $('.left_menu > ul > li > a').click(function(){
                $('.paragraph a').removeClass('active');
                $(this).addClass('active');
            }),
                    $('.paragraph ul li a').click(function(){
                        $('.paragraph ul li a').removeClass('active');
                        $(this).addClass('active');
                    });
        });

       
 </script>
angular.module('app')
    .service('menu', function(){
        this.items = [];
        this.add = function(title, link, order) {
            this.items.push({
                title : title,
                link  : link,
                order : order
            });
        }

        this.sort = function() {
            return this.items.sort(function(a,b){
                return a.order - b.order;
            });
        }

        return this;
    });

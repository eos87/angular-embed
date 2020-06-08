(function () {
    'use strict';
    function IframelyProvider() {
        var provider = this;
        // register the service in the provider and inject dependencies
        function iframelyService($resource) {
            return {
                embed: function(url, oEmbed) {
                    var mode = oEmbed === true ? 'oembed': 'iframely';
                    var apiKey = provider.getKey();
                    var resource = $resource('https://iframe.ly/api/'+mode+'?api_key='+apiKey+'&url='+url);

                    return resource.get().$promise.then(function(data) {
                        if (mode !== 'oembed') {
                            // mimic oembed
                            data.title = data.meta.title;
                            data.provider_name = data.meta.site;
                        }

                        return data;
                    });
                }
            };
        }
        angular.extend(provider, {
            $get: ['$resource', iframelyService],
            setKey: function(key) {
                provider.key = key;
            },
            getKey: function() {
                return provider.key;
            }
        });
    }
    angular.module('iframely').provider('iframelyService', IframelyProvider);
})();

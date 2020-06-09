(function () {
    'use strict';
    function IframelyProvider() {
        var provider = this;
        var iframelyEndpoint = 'iframely'

        // user iframely endpoint as default
        provider.apiEndpoint = iframelyEndpoint;

        // register the service in the provider and inject dependencies
        function iframelyService($resource) {
            return {
                embed: function(url) {
                    var endpoint = provider.getEndpoint();
                    var apiKey = provider.getKey();
                    var resource = $resource('https://iframe.ly/api/'+endpoint+'?api_key='+apiKey+'&url='+url);

                    return resource.get().$promise.then(function(data) {
                        if (endpoint === iframelyEndpoint) {
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
            },
            getEndpoint: function() {
                return provider.apiEndpoint;
            },
            useOembed: function() {
                provider.apiEndpoint = 'oembed';
            },
            useIframely: function() {
                provider.apiEndpoint = iframelyEndpoint;
            }
        });
    }
    angular.module('iframely').provider('iframelyService', IframelyProvider);
})();

'use strict';

describe('angular-embed', function() {

    var dependencies;
    var httpBackend;
    var embedService;
    var providers = [
        /*jshint ignore:start,-W101*/
        {"patterns":["http://(?:www\\.)?xkcd\\.com/\\d+/?"],"name":"XKCD"},{"patterns":["https?://soundcloud.com/.*/.*"],"name":"SoundCloud"},{"patterns":["https?://(?:www\\.)?flickr\\.com/.*","https?://flic\\.kr/p/[a-zA-Z0-9]+"],"name":"Flickr"},{"patterns":["http://www\\.ted\\.com/talks/.+\\.html"],"name":"TED"},{"patterns":["http://(?:www\\.)?theverge\\.com/\\d{4}/\\d{1,2}/\\d{1,2}/\\d+/[^/]+/?$"],"name":"The Verge"},{"patterns":["http://.*\\.viddler\\.com/.*"],"name":"Viddler"},{"patterns":["https?://(?:www\\.)?avclub\\.com/article/[^/]+/?$"],"name":"The AV Club"},{"patterns":["https?://(?:www\\.)?wired\\.com/([^/]+/)?\\d+/\\d+/[^/]+/?$"],"name":"Wired"},{"patterns":["http://www\\.theonion\\.com/articles/[^/]+/?"],"name":"The Onion"},{"patterns":["http://yfrog\\.com/[0-9a-zA-Z]+/?$"],"name":"YFrog"},{"patterns":["http://www\\.duffelblog\\.com/\\d{4}/\\d{1,2}/[^/]+/?$"],"name":"The Duffel Blog"},{"patterns":["http://www\\.clickhole\\.com/article/[^/]+/?"],"name":"Clickhole"},{"patterns":["https?://(?:www.)?skitch.com/([^/]+)/[^/]+/.+","http://skit.ch/[^/]+"],"name":"Skitch"},{"patterns":["https?://(alpha|posts|photos)\\.app\\.net/.*"],"name":"ADN"},{"patterns":["https?://gist\\.github\\.com/(?:[-0-9a-zA-Z]+/)?([0-9a-fA-f]+)"],"name":"Gist"},{"patterns":["https?://www\\.(dropbox\\.com/s/.+\\.(?:jpg|png|gif))","https?://db\\.tt/[a-zA-Z0-9]+"],"name":"Dropbox"},{"patterns":["https?://[^\\.]+\\.wikipedia\\.org/wiki/(?!Talk:)[^#]+(?:#(.+))?"],"name":"Wikipedia"},{"patterns":["http://www.traileraddict.com/trailer/[^/]+/trailer"],"name":"TrailerAddict"},{"patterns":["http://lockerz\\.com/[sd]/\\d+"],"name":"Lockerz"},{"patterns":["http://gifuk\\.com/s/[0-9a-f]{16}"],"name":"GIFUK"},{"patterns":["http://trailers\\.apple\\.com/trailers/[^/]+/[^/]+"],"name":"iTunes Movie Trailers"},{"patterns":["http://gfycat\\.com/([a-zA-Z]+)"],"name":"Gfycat"},{"patterns":["http://bash\\.org/\\?(\\d+)"],"name":"Bash.org"},{"patterns":["http://arstechnica\\.com/[^/]+/\\d+/\\d+/[^/]+/?$"],"name":"Ars Technica"},{"patterns":["http://imgur\\.com/gallery/[0-9a-zA-Z]+"],"name":"Imgur"},{"patterns":["http://www\\.asciiartfarts\\.com/[0-9]+\\.html"],"name":"ASCII Art Farts"},{"patterns":["http://www\\.monoprice\\.com/products/product\\.asp\\?.*p_id=\\d+"],"name":"Monoprice"},{"patterns":["http://boingboing\\.net/\\d{4}/\\d{2}/\\d{2}/[^/]+\\.html"],"name":"Boing Boing"},{"patterns":["https?://(?:[^\\.]+\\.)?youtube\\.com/watch/?\\?(?:.+&)?v=([^&]+)","https?://youtu\\.be/([a-zA-Z0-9_-]+)"],"name":"YouTube"},{"patterns":["https?://github\\.com/([^/]+)/([^/]+)/commit/(.+)","http://git\\.io/[_0-9a-zA-Z]+"],"name":"Github Commit"},{"patterns":["https?://open\\.spotify\\.com/(track|album)/([0-9a-zA-Z]{22})"],"name":"Spotify"},{"patterns":["https?://path\\.com/p/([0-9a-zA-Z]+)$"],"name":"Path"},{"patterns":["http://www.funnyordie.com/videos/[^/]+/.+"],"name":"Funny or Die"},{"patterns":["http://(?:www\\.)?twitpic\\.com/([^/]+)"],"name":"Twitpic"},{"patterns":["https?://www\\.giantbomb\\.com/videos/[^/]+/\\d+-\\d+/?"],"name":"GiantBomb"},{"patterns":["http://(?:www\\.)?beeradvocate\\.com/beer/profile/\\d+/\\d+"],"name":"Beer Advocate"},{"patterns":["http://(?:www\\.)?imdb.com/title/(tt\\d+)"],"name":"IMDB"},{"patterns":["http://cl\\.ly/(?:image/)?[0-9a-zA-Z]+/?$"],"name":"CloudApp"},{"patterns":["http://clyp\\.it/.*"],"name":"Clyp"},{"patterns":["http://www\\.hulu\\.com/watch/.*"],"name":"Hulu"},{"patterns":["https?://(?:www|mobile\\.)?twitter\\.com/(?:#!/)?[^/]+/status(?:es)?/(\\d+)/?$","https?://t\\.co/[a-zA-Z0-9]+"],"name":"Twitter"},{"patterns":["https?://(?:www\\.)?vimeo\\.com/.+"],"name":"Vimeo"},{"patterns":["http://www\\.amazon\\.com/(?:.+/)?[gd]p/(?:product/)?(?:tags-on-product/)?([a-zA-Z0-9]+)","http://amzn\\.com/([^/]+)"],"name":"Amazon"},{"patterns":["http://qik\\.com/video/.*"],"name":"Qik"},{"patterns":["http://www\\.rdio\\.com/artist/[^/]+/album/[^/]+/?","http://www\\.rdio\\.com/artist/[^/]+/album/[^/]+/track/[^/]+/?","http://www\\.rdio\\.com/people/[^/]+/playlists/\\d+/[^/]+"],"name":"Rdio"},{"patterns":["http://www\\.slideshare\\.net/.*/.*"],"name":"SlideShare"},{"patterns":["http://imgur\\.com/([0-9a-zA-Z]+)$"],"name":"Imgur"},{"patterns":["https?://instagr(?:\\.am|am\\.com)/p/.+"],"name":"Instagram"},{"patterns":["http://www\\.twitlonger\\.com/show/[a-zA-Z0-9]+","http://tl\\.gd/[^/]+"],"name":"Twitlonger"},{"patterns":["https?://vine.co/v/[a-zA-Z0-9]+"],"name":"Vine"},{"patterns":["http://www\\.urbandictionary\\.com/define\\.php\\?term=.+"],"name":"Urban Dictionary"},{"patterns":["http://picplz\\.com/user/[^/]+/pic/[^/]+"],"name":"Picplz"},{"patterns":["https?://(?:www\\.)?twitter\\.com/(?:#!/)?[^/]+/status(?:es)?/(\\d+)/photo/\\d+(?:/large|/)?$","https?://pic\\.twitter\\.com/.+"],"name":"Twitter"}
        /*jshint ignore:end,+W101*/
    ];
    var youtube_url = 'https://www.youtube.com/watch?v=Ksd-a9lIIDc';
    var youtube_response = {
        /*jshint ignore:start,-W101*/
        'author_name':'Cats Go Boom Mixes','width':480,'author_url':'http://www.youtube.com/user/SickMixxxes','provider_url':'http://www.youtube.com/','version':'1.0','thumbnail_width':480,'provider_name':'YouTube','thumbnail_url':'https://i.ytimg.com/vi/Ksd-a9lIIDc/hqdefault.jpg','height':270,'thumbnail_height':360,'html':'\n<div class=\'noembed-embed \'>\n  <div class=\'noembed-wrapper\'>\n    \n<div class=\'noembed-embed-inner noembed-youtube\'>\n  \n<iframe width=\' 480\' height=\'270\' src=\'https://www.youtube.com/embed/Ksd-a9lIIDc?feature=oembed\' frameborder=\'0\' allowfullscreen></iframe>\n\n</div>\n\n    <table class=\'noembed-meta-info\'>\n      <tr>\n        <td class=\'favicon\'><img src=\'https://noembed.com/favicon/YouTube.png\'></td>\n        <td>YouTube</td>\n        <td align=\'right\'>\n          <a title=\'https://www.youtube.com/watch?v=Ksd-a9lIIDc\' href=\'https://www.youtube.com/watch?v=Ksd-a9lIIDc\'>https://www.youtube.com/watch?v=Ksd-a9lIIDc</a>\n        </td>\n      </tr>\n    </table>\n  </div>\n</div>\n','url':'https://www.youtube.com/watch?v=Ksd-a9lIIDc','title':'LCD Soundsystem - Get Innocuous! (Soulwax Remix)','type':'video'
        /*jshint ignore:end,+W101*/
    };
    var randomsite_url = 'http://www.charliehebdo.fr/index.html';
    var randomsite_response = {
        /*jshint ignore:start,-W101*/
        'provider_url':'http://www.charliehebdo.fr','version':'1.0','url':'http://www.charliehebdo.fr/index.html','thumbnail_width':649,'thumbnail_url':'http://www.charliehebdo.fr/images/jesuischarlie.png','thumbnail_height':274,'type':'link','provider_name':'Charliehebdo'
        /*jshint ignore:end,+W101*/
    };
    dependencies = [];

    beforeEach(module('angular-embed.services'));

    beforeEach(inject(function(_embedService_, _$httpBackend_) {
        httpBackend = _$httpBackend_;
        embedService = _embedService_;
        httpBackend.whenJSONP('https://noembed.com/providers?callback=JSON_CALLBACK').respond(providers);
        httpBackend.whenJSONP('https://noembed.com/embed?callback=JSON_CALLBACK&url='+youtube_url).respond(youtube_response);
        httpBackend.whenGET('https://api.embed.ly/1/oembed?key=undefined&url='+encodeURIComponent(youtube_url))
            .respond(youtube_response);

        httpBackend.whenGET('https://api.embed.ly/1/oembed?key=undefined&url='+encodeURIComponent(randomsite_url))
            .respond(randomsite_response);
    }));

    afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    it('should retrieve the embed code for a youtube video from noEmbed', function() {
        embedService.get(youtube_url).then(function(data) {
            assert.property(data, 'title');
            assert.property(data, 'url');
            assert.equal(data.provider_name, 'YouTube');
        },
        function(error) {
            throw new Error(error);
        });
        httpBackend.flush();
    });

    it('should retrieve the embed code for random site', function() {
        embedService.get(randomsite_url).then(function(data) {
            assert.property(data, 'url');
            assert.property(data, 'thumbnail_url');
            assert.equal(data.provider_name, 'Charliehebdo');
        },
        function(error) {
            throw new Error(error);
        });
        httpBackend.flush();
    });
});

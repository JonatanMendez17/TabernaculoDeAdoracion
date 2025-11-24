// Video Module - Construction video player functionality
(function(){
  'use strict';
  
  // YouTube video URL
  var videoUrl = 'https://youtu.be/rI_Sr80AkWA';
  
  function initVideo(){
    var placeholder = document.getElementById('videoPlaceholder');
    var videoEmbed = document.getElementById('videoEmbed');
    var videoIframe = document.getElementById('constructionVideo');
    
    if(!placeholder || !videoEmbed || !videoIframe) return;
    
    // Handle click on placeholder
    placeholder.addEventListener('click', function(){
      // Hide placeholder
      placeholder.classList.add('hidden');
      
      // Show video embed
      videoEmbed.style.display = 'block';
      
      // Convert YouTube URL to embed format
      var videoId = '';
      if(videoUrl.includes('youtube.com/watch?v=')){
        videoId = videoUrl.split('v=')[1].split('&')[0];
      } else if(videoUrl.includes('youtu.be/')){
        videoId = videoUrl.split('youtu.be/')[1].split('?')[0];
      } else if(videoUrl.includes('youtube.com/embed/')){
        videoId = videoUrl.split('embed/')[1].split('?')[0];
      }
      
      if(videoId){
        var embedUrl = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1&rel=0';
        videoIframe.src = embedUrl;
      }
    });
  }
  
  // Initialize on DOM ready
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', initVideo);
  } else {
    initVideo();
  }
})();

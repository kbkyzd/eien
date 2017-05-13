@inject('git', 'eien\Helpers\Version')
<div class="container center">
    Made by
    <a href="https://amatsuka.me" class="deep-orange-text text-lighten-1">あまつか</a> :: Powered by @lang('site.header'), {{ $git->hash() }} (r{{ $git->revision() }})
</div>

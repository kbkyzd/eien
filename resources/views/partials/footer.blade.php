@inject('git', 'eien\Helpers\Version')
<div class="container center">Powered by @lang('site.header'), {{ $git->hash() }} (r{{ $git->revision() }})
    <span title="Dirty">{{ $git->isClean() ?: '!!!' }}</span> {{-- Exclaimation marks means the current repo is dirty --}}
</div>

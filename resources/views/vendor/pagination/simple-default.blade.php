@if ($paginator->hasPages())
    <ul class="pagination">
        {{-- Previous Page Link --}}
        @if ($paginator->onFirstPage())
            <li class="disabled"><a>@lang('pagination.previous')</a></li>
        @else
            <li>
                <a href="{{ $paginator->previousPageUrl() }}" rel="prev"><i class="material-icons">chevron_left</i>@lang('pagination.previous')
                </a></li>
        @endif

        {{-- Next Page Link --}}
        @if ($paginator->hasMorePages())
            <li><a href="{{ $paginator->nextPageUrl() }}" rel="next">@lang('pagination.next')
                    <i class="material-icons">chevron_right</i></a></li>
        @else
            <li class="disabled"><a>@lang('pagination.next')</a></li>
        @endif
    </ul>
@endif

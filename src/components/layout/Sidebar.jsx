import React from 'react';
import clsx from 'clsx';
import {
  PencilSquareIcon,
  MagnifyingGlassIcon,
  FolderIcon,
  CodeBracketSquareIcon,
  EllipsisHorizontalIcon,
  ViewColumnsIcon,
  CubeIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';

export default function Sidebar({
  isOpen = true,
  onToggle,
  onNewChat = () => {},
}) {
  const item =
    'group flex w-full items-center rounded-lg text-[14px] font-semibold text-white/90 transition hover:bg-white/[0.07]';

  const icon =
    'h-[18px] w-[18px] shrink-0 text-white/75 transition group-hover:text-white';

  const sectionLabel =
    'text-[11px] font-semibold uppercase tracking-[0.16em] text-white/35';

  const itemStyle = {
    height: '34px',
    paddingLeft: '10px',
    paddingRight: '10px',
    gap: '12px',
  };

  const labelStyle = {
    paddingLeft: '10px',
    marginBottom: '6px',
  };

  return (
    <aside
      className={clsx(
        'fixed inset-y-0 left-0 z-40 h-screen w-70 shrink-0 border-r border-white/8 bg-[#090d16] text-white transition-transform duration-200 ease-out lg:static lg:translate-x-0',
        isOpen ? 'translate-x-0' : '-translate-x-full'
      )}
    >
      <div
        className="flex h-full min-h-0 flex-col"
        style={{
          paddingLeft: '18px',
          paddingRight: '18px',
          paddingTop: '24px',
          paddingBottom: '18px',
        }}
      >
        {/* Brand */}
        <div
          className="shrink-0"
          style={{
            paddingLeft: '4px',
            paddingRight: '4px',
          }}
        >
          <div className="flex items-center justify-between">
            <h1 className="text-[34px] font-semibold leading-none tracking-[-0.055em] text-white">
              Jarvice
            </h1>

            <button
              type="button"
              onClick={onToggle}
              aria-label="Toggle sidebar"
              className="grid h-9 w-9 place-items-center rounded-xl text-white/70 transition hover:bg-white/[0.07] hover:text-white"
            >
              <ViewColumnsIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        <nav
          className="min-h-0 flex-1 overflow-y-auto"
          style={{
            marginTop: '20px',
            paddingRight: '2px',
          }}
        >
          {/* Workspace */}
          <div>
            <p className={sectionLabel} style={labelStyle}>
              Workspace
            </p>

            <div
              className="flex flex-col"
              style={{
                gap: '3px',
              }}
            >
              <button
                type="button"
                onClick={onNewChat}
                className={clsx(item, 'bg-white/[0.07] text-white')}
                style={itemStyle}
              >
                <PencilSquareIcon className={icon} />
                <span>New chat</span>
              </button>

              <button type="button" className={item} style={itemStyle}>
                <MagnifyingGlassIcon className={icon} />
                <span>Search chats</span>
              </button>

              <button type="button" className={item} style={itemStyle}>
                <FolderIcon className={icon} />
                <span>Projects</span>
              </button>

              <button type="button" className={item} style={itemStyle}>
                <CodeBracketSquareIcon className={icon} />
                <span>Codex</span>
              </button>

              <button type="button" className={item} style={itemStyle}>
                <CubeIcon className={icon} />
                <span>Explore GPTs</span>
              </button>

              <button type="button" className={item} style={itemStyle}>
                <EllipsisHorizontalIcon className={icon} />
                <span>More</span>
              </button>
            </div>
          </div>

          {/* History */}
          <div
            style={{
              marginTop: '18px',
            }}
          >
            <button
              type="button"
              className="group flex w-full items-center rounded-lg text-[14px] font-semibold text-white transition hover:bg-white/[0.07]"
              style={{
                height: '34px',
                paddingLeft: '10px',
                paddingRight: '10px',
                gap: '2px',
              }}
            >
              <span>Recents</span>
              <ChevronRightIcon className="h-3.5 w-3.5 text-white/55 transition group-hover:text-white/80" />
            </button>
          </div>
        </nav>

        {/* Profile */}
        <div className="shrink-0" style={{ paddingTop: '14px' }}>
          <button
            type="button"
            className="flex w-full items-center rounded-xl text-left transition hover:bg-white/[0.07]"
            style={{
              height: '52px',
              paddingLeft: '10px',
              paddingRight: '10px',
              gap: '12px',
            }}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#14b8a6] text-[12px] font-bold leading-none text-white">
              AB
            </div>

            <div className="flex min-w-0 flex-col">
              <span className="truncate text-[14px] font-semibold leading-4.5 text-white">
                Aryan Behera
              </span>
              <span className="truncate text-[13px] font-normal leading-4.25 text-white/65">
                Plus
              </span>
            </div>
          </button>
        </div>
      </div>
    </aside>
  );
}
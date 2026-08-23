window.__ModuleLoader__.load({
	id: "@relay/dsh-plugin-codex",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let react = require("react");
		let react_jsx_runtime = require("react/jsx-runtime");
		let _deepseek_ai_dsh_client_ui_primitives = require("@deepseek-ai/dsh-client-ui-primitives");
		//#region advanced-debug-preference.mjs
		const ADVANCED_DEBUG_STORAGE_KEY = "relay.ui.advanced-debug";
		var AdvancedDebugPreference = class {
			constructor({ storage = availableStorage(), eventTarget = availableEventTarget() } = {}) {
				this.storage = storage;
				this.eventTarget = eventTarget;
				this.listeners = /* @__PURE__ */ new Set();
				this.value = readPreference(storage);
				this.onStorage = (event) => {
					if (event?.key !== "relay.ui.advanced-debug") return;
					this.update(readPreference(this.storage), false);
				};
				this.eventTarget?.addEventListener?.("storage", this.onStorage);
			}
			getSnapshot = () => this.value;
			subscribe = (listener) => {
				this.listeners.add(listener);
				return () => this.listeners.delete(listener);
			};
			set(enabled) {
				this.update(Boolean(enabled), true);
			}
			dispose() {
				this.eventTarget?.removeEventListener?.("storage", this.onStorage);
				this.listeners.clear();
			}
			update(next, persist) {
				if (persist) writePreference(this.storage, next);
				if (next === this.value) return;
				this.value = next;
				for (const listener of this.listeners) listener();
			}
		};
		function readPreference(storage) {
			try {
				return storage?.getItem?.(ADVANCED_DEBUG_STORAGE_KEY) === "true";
			} catch {
				return false;
			}
		}
		function writePreference(storage, enabled) {
			try {
				storage?.setItem?.(ADVANCED_DEBUG_STORAGE_KEY, enabled ? "true" : "false");
			} catch {}
		}
		function availableStorage() {
			try {
				return globalThis.localStorage;
			} catch {
				return;
			}
		}
		function availableEventTarget() {
			return globalThis.window;
		}
		//#endregion
		//#region \0relay-css-module:./src/client/AdvancedDebug.module.css.mjs
		const css$1 = ".Y4qSZW_section{width:100%;max-width:780px;color:var(--dsw-alias-label-primary)}.Y4qSZW_settingRow{border-bottom:1px solid var(--dsw-alias-border-l2);justify-content:space-between;align-items:center;gap:20px;min-height:58px;padding:8px 0;display:flex}.Y4qSZW_settingCopy{flex-direction:column;gap:2px;min-width:0;display:flex}.Y4qSZW_settingCopy strong{font-size:14px;font-weight:500;line-height:20px}.Y4qSZW_settingCopy span{color:var(--dsw-alias-label-tertiary);font-size:12px;line-height:18px}.Y4qSZW_switch{cursor:pointer;flex:none;width:36px;height:20px;display:inline-flex;position:relative}.Y4qSZW_switch input{opacity:0;width:1px;height:1px;position:absolute}.Y4qSZW_switch span{background:var(--dsw-alias-fill-l2);border-radius:10px;width:100%;transition:background-color .12s}.Y4qSZW_switch span:after{background:var(--dsw-alias-bg-layer-1);content:\"\";border-radius:50%;width:16px;height:16px;transition:transform .12s;position:absolute;top:2px;left:2px;box-shadow:0 1px 3px #0003}.Y4qSZW_switch input:checked+span{background:var(--dsw-alias-state-business-primary)}.Y4qSZW_switch input:checked+span:after{transform:translate(16px)}.Y4qSZW_switch input:focus-visible+span{outline:2px solid var(--dsw-alias-state-business-primary);outline-offset:2px}.Y4qSZW_marker{display:none}[data-relay-simple-conversation=true] [role=tablist]{display:none}";
		const tagId$1 = "@relay/dsh-plugin-codex/AdvancedDebug.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId$1) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "@relay/dsh-plugin-codex";
			tag.dataset.pluginCss = tagId$1;
			tag.textContent = css$1;
			document.head.appendChild(tag);
		}
		var AdvancedDebug_module_css_default = {
			"marker": "Y4qSZW_marker",
			"section": "Y4qSZW_section",
			"settingCopy": "Y4qSZW_settingCopy",
			"settingRow": "Y4qSZW_settingRow",
			"switch": "Y4qSZW_switch"
		};
		//#endregion
		//#region src/client/AdvancedDebug.tsx
		function AdvancedDebugSection({ useAdvancedDebug, setAdvancedDebug, t }) {
			const enabled = useAdvancedDebug((value) => value);
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("section", {
				className: AdvancedDebug_module_css_default.section,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: AdvancedDebug_module_css_default.settingRow,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: AdvancedDebug_module_css_default.settingCopy,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: t("advancedDebug") }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t("advancedDebugDetail") })]
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
						className: AdvancedDebug_module_css_default.switch,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
							type: "checkbox",
							role: "switch",
							"aria-label": t("advancedDebug"),
							checked: enabled,
							onChange: (event) => {
								setAdvancedDebug(event.currentTarget.checked);
							}
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { "aria-hidden": "true" })]
					})]
				})
			});
		}
		function AdvancedDebugGuard({ useAdvancedDebug }) {
			const enabled = useAdvancedDebug((value) => value);
			const marker = (0, react.useRef)(null);
			(0, react.useLayoutEffect)(() => {
				const header = marker.current?.closest("header");
				if (header === void 0 || header === null) return;
				if (enabled) header.removeAttribute("data-relay-simple-conversation");
				else {
					const selectChat = () => {
						const chatTab = header.querySelector("[role=\"tablist\"] [role=\"tab\"]");
						if (chatTab?.getAttribute("aria-selected") !== "true") chatTab?.click();
					};
					selectChat();
					header.setAttribute("data-relay-simple-conversation", "true");
					const observer = new MutationObserver(selectChat);
					observer.observe(header, {
						attributes: true,
						attributeFilter: ["aria-selected"],
						childList: true,
						subtree: true
					});
					return () => {
						observer.disconnect();
						header.removeAttribute("data-relay-simple-conversation");
					};
				}
				return () => {
					header.removeAttribute("data-relay-simple-conversation");
				};
			}, [enabled]);
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
				ref: marker,
				className: AdvancedDebug_module_css_default.marker,
				"aria-hidden": "true"
			});
		}
		function HiddenSessionLogAction() {
			return null;
		}
		//#endregion
		//#region \0relay-css-module:./src/client/CodexActivityView.module.css.mjs
		const css = ".jIHzgW_activity{width:min(100%,960px);color:var(--dsw-alias-label-secondary)}.jIHzgW_summary{min-width:0;color:var(--dsw-alias-label-tertiary);flex:1;align-items:center;gap:8px;font-size:13px;display:flex}.jIHzgW_summary :first-child{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.jIHzgW_detail{border-left:1px solid var(--dsw-alias-border-l2);margin:4px 0 8px 28px;padding-left:12px;overflow:hidden}.jIHzgW_detail pre{max-height:320px;color:var(--dsw-alias-label-secondary);font:var(--dsw-font-markdown-code-block-small);white-space:pre-wrap;word-break:break-word;margin:0 0 8px;overflow:auto}.jIHzgW_provenance{color:var(--dsw-alias-label-tertiary);text-overflow:ellipsis;white-space:nowrap;margin-bottom:8px;font-size:12px;line-height:18px;overflow:hidden}";
		const tagId = "@relay/dsh-plugin-codex/CodexActivityView.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "@relay/dsh-plugin-codex";
			tag.dataset.pluginCss = tagId;
			tag.textContent = css;
			document.head.appendChild(tag);
		}
		var CodexActivityView_module_css_default = {
			"activity": "jIHzgW_activity",
			"detail": "jIHzgW_detail",
			"provenance": "jIHzgW_provenance",
			"summary": "jIHzgW_summary"
		};
		//#endregion
		//#region src/client/CodexActivityView.tsx
		function dotState(status) {
			if (status === "running") return "ongoing";
			if (status === "error") return "error";
			return "done";
		}
		function ActivityIcon({ type }) {
			if (type === "webSearch") return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconSearchOutline16, {});
			if (type === "plan") return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconListPenOutline16, {});
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconCodeOutline16, {});
		}
		const CodexActivityView = (0, react.memo)(function CodexActivityView({ node }) {
			const activity = node.data;
			const [open, setOpen] = (0, react.useState)(false);
			const expandable = activity.input !== void 0 || activity.output !== void 0 || activity.provenance !== void 0;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: CodexActivityView_module_css_default.activity,
				"data-codex-activity": activity.type,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.DisclosureRow, {
					icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ActivityIcon, { type: activity.type }),
					title: activity.title,
					open,
					expandable,
					onToggle: () => {
						setOpen((value) => !value);
					},
					expandOnRowClick: true,
					collapsedContent: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
						className: CodexActivityView_module_css_default.summary,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: activity.summary }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.StateDot, {
							state: dotState(activity.status),
							size: 8
						})]
					}),
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: CodexActivityView_module_css_default.detail,
						children: [
							activity.provenance !== void 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: CodexActivityView_module_css_default.provenance,
								title: `Codex App Server · Thread ${activity.provenance.threadId} · Turn ${activity.provenance.turnId}`,
								children: [
									"Codex App Server · Thread ",
									shortId(activity.provenance.threadId),
									" · Turn ",
									shortId(activity.provenance.turnId)
								]
							}) : null,
							activity.input !== void 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("pre", { children: activity.input }) : null,
							activity.output !== void 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("pre", { children: activity.output }) : null
						]
					})
				})
			});
		});
		function shortId(value) {
			return value.length > 15 ? `${value.slice(0, 8)}...${value.slice(-4)}` : value;
		}
		//#endregion
		//#region src/client/codex-activity.ts
		const codexActivityDefinition = {
			kind: "relay-codex-activity",
			target: "chat",
			match: (event) => event.type === "relay-codex/activity" ? {
				id: event.data.itemId,
				role: event.data.phase === "started" ? "start" : "update"
			} : null,
			start: (_context, match) => {
				if (match.event.type !== "relay-codex/activity") throw new Error("Codex activity start requires relay-codex/activity");
				return {
					...match.event.data.activity,
					provenance: {
						threadId: match.event.data.threadId,
						turnId: match.event.data.turnId
					}
				};
			},
			update: (context, match) => match.event.type === "relay-codex/activity" ? {
				...match.event.data.activity,
				provenance: {
					threadId: match.event.data.threadId,
					turnId: match.event.data.turnId
				}
			} : context.state,
			buildViewNode: (context) => {
				if (context.start === void 0 || context.state === void 0) return null;
				return {
					key: context.key,
					kind: "relay-codex-activity",
					id: context.id,
					target: "chat",
					anchorSeq: context.start.event.seq,
					location: context.start.location,
					visibility: "visible",
					data: context.state
				};
			}
		};
		//#endregion
		//#region src/client/locales.ts
		const zh = {
			advancedNav: "高级",
			advancedDebug: "高级调试模式",
			advancedDebugDetail: "轨迹与诊断包"
		};
		const en = {
			advancedNav: "Advanced",
			advancedDebug: "Advanced debugging",
			advancedDebugDetail: "Trajectory and diagnostic archive"
		};
		//#endregion
		//#region src/client/index.ts
		const inject = [
			"slots",
			"theme",
			"locale",
			"sessions",
			"connection",
			"conversationEvents"
		];
		function apply(ctx) {
			applyAdvancedDebug(ctx);
			ctx.conversationEvents.register(codexActivityDefinition);
			ctx.slots.inject("conversation.chat.node", () => ctx.slots.register({
				name: "conversation.chat.node",
				key: "relay-codex-activity"
			}, CodexActivityView));
			return installModelSelection(ctx, "relay-codex", "relay-codex", "relay-claude");
		}
		function applyAdvancedDebug(ctx) {
			ctx.effect(() => ctx.locale.register("relay.codex", {
				zh,
				en
			}), "relay-codex: dictionaries");
			const t = ctx.locale.bind("relay.codex");
			const advancedDebug = new AdvancedDebugPreference();
			const hooks = { hooks: { advancedDebug } };
			ctx.effect(() => () => {
				advancedDebug.dispose();
			}, "relay-codex: advanced debug preference");
			ctx.slots.inject("settings.section", () => ctx.slots.register({
				name: "settings.section",
				id: "relay-codex-advanced-debug",
				order: 90,
				label: () => t("advancedNav"),
				locale: "relay.codex",
				inject: () => ({
					...hooks,
					setAdvancedDebug: (enabled) => {
						advancedDebug.set(enabled);
					}
				})
			}, AdvancedDebugSection));
			ctx.slots.inject("conversation.session.header.actions", () => ctx.slots.register({
				name: "conversation.session.header.actions",
				id: "relay-codex-advanced-debug-guard",
				order: -20,
				inject: () => hooks
			}, AdvancedDebugGuard));
			ctx.slots.inject("conversation.session.header.utilities", () => {
				let removeShadow;
				const reconcile = () => {
					if (advancedDebug.getSnapshot()) {
						removeShadow?.();
						removeShadow = void 0;
					} else if (removeShadow === void 0) removeShadow = ctx.slots.register({
						name: "conversation.session.header.utilities",
						id: "session-log-download",
						priority: -100
					}, HiddenSessionLogAction);
				};
				const unsubscribe = advancedDebug.subscribe(reconcile);
				reconcile();
				return () => {
					unsubscribe();
					removeShadow?.();
				};
			});
		}
		function installModelSelection(ctx, preset, provider, otherProvider) {
			const connection = ctx.get("connection");
			const selecting = /* @__PURE__ */ new Set();
			const sync = () => {
				const list = ctx.sessions.list.getSnapshot();
				const id = list.current;
				if (id === void 0 || list.byId[id]?.blank !== true || selecting.has(id)) return;
				const selectedPreset = list.byId[id]?.agentPreset;
				if (selectedPreset !== preset && selectedPreset === otherProvider) return;
				selecting.add(id);
				connection.api.sessions.models({ sessionId: id }).then(async (response) => {
					const { result } = response;
					if (!result.ok) return;
					const target = selectedPreset === preset ? result.value.groups.find((group) => group.id === provider) : result.value.current.provider === provider ? result.value.groups.find((group) => group.id !== provider && group.id !== otherProvider) : void 0;
					const model = target?.models[0];
					if (target && model) await connection.api.sessions.selectModel({
						sessionId: id,
						provider: target.id,
						model: model.id,
						...model.reasoning?.defaultEffort ? { reasoningEffort: model.reasoning.defaultEffort } : {}
					});
				}).catch(() => {}).finally(() => {
					selecting.delete(id);
				});
			};
			const off = ctx.sessions.list.subscribe(sync);
			sync();
			return off;
		}
		//#endregion
		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});

//# sourceMappingURL=client.js.map
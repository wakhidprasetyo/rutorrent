﻿/*
 * WebUI - The WEB interface for uTorrent - http://www.utorrent.com
 * NO COPYCATS of language update
 *
 * == BEGIN LICENSE ==
 *
 * Licensed under the terms of any of the following licenses at your
 * choice:
 *
 *  - GNU General Public License Version 2 or later (the "GPL")
 *    http://www.gnu.org/licenses/gpl.html
 *
 *  - GNU Lesser General Public License Version 2.1 or later (the "LGPL")
 *    http://www.gnu.org/licenses/lgpl.html
 *
 *  - Mozilla Public License Version 1.1 or later (the "MPL")
 *    http://www.mozilla.org/MPL/MPL-1.1.html
 *
 * == END LICENSE ==
 *
 * File Name: vi.js
 *      Vietnamese language file.
 *
 * File Author:
 *              Ta Xuan Truong (truongtx8 AT gmail DOT com)
 */
 
 var theUILang =
 {
 //all used
 kbs                            : "kB/s",
 
 
 //Settings window
 
 General                        : "Tổng quan",
 Downloads                      : "Tải xuống",
 Connection                     : "Kết nối",
 BitTorrent                     : "BitTorrent",
 Queueing                       : "Đang đợi",
 Scheduler                      : "Lập lịch",
 Advanced                       : "Nâng cao",
 Disk_Cache                     : "Bộ đệm đĩa",
 Enable_Web_Interface 			: "Bật giao diện Web",
 Authent                        : "Xác thực",
 Username                       : "Tên truy cập",
 Password                       : "Mật khẩu",
 Enable_Guest_acc       : "Cho phép Khách đăng nhập với tên",
 Connectivity           : "Liên kết",
 Alt_list_port          : "Cổng thay thế (mặc định là cổng bittorrent)",
 Rest_access            : "Hạn chế truy cập vào các địa chỉ IP sau (tách nhau bởi dấu ,)",
 User_Interface         : "Giao diện người dùng",
 Confirm_del_torr       : "Hỏi lại khi xóa torrent",
 Update_GUI_every       : "Cập nhật giao diện mỗi",
 ms                     : "ms",
 Alt_list_bckgnd        : "Xen kẽ màu nền trong danh sách",
 Show_speed             : "Hiện Tốc Độ",
 Don_t                  : "Không",
 In_status_bar          : "Ở thanh Trạng thái",
 In_title_bar           : "Ở thanh Tiêu đề",
 Show_cat_start         : "Hiển thị các mục khi khởi động",
 Show_det_start         : "Hiển thị đầy đủ khi khởi động",
 Restor_def             : "Cài đặt về mặc định",
 When_add_torrent       : "Khi thêm torrent",
 Dnt_start_down_auto    : "Không tự đổng tải",
 Other_sett             : "Các cài đặt khác",
 Append_ut_incompl      : "Thêm đuôi .!ut vào các tập tin chưa hoàn thành",
 Prealloc_all_files     : "Tạo sẵn tất cả tập tin",
 Prev_stnd_w_act_con    : "Không nghỉ nếu vẫn còn torrent đang chạy",
 Listening_Port         : "Lắng nghe cổng",
 Port_f_incom_conns     : "Cổng sử dụng cho các kết nối đến",
 Random_Port            : "Cổng ngẫu nhiên",
 Rnd_port_torr_start    : "Chọn cổng ngẫu nhiên khi rTorrent khởi động",
 En_UPnP_mapp           : "Cho phép mở cổng thông qua UPnP",
 Add_torr_mustdie_f     : "Cho phép rTorrent qua Tường lửa của Windows (Windows XP SP2 hoặc mới hơn)",
 Proxy_Server           : "Máy ủy thác (Proxy)",
 Type                           : "Loại",
 none                           : "(trống)",
 Proxy                          : "Proxy",
 Port                           : "Cổng",
 Use_proxy_4_p2p_con    : "Sử dụng máy ủy thác cho các kết nối điểm-điểm",
 Bandwidth_Limiting     : "Giới hạn băng thông",
 Global_max_upl         : "Tổng băng thông tải lên cao nhất",
 unlimited                      : "không giới hạn",
 Alt_down_r_downl       : "Tải lên luân phiên khi không có tải xuống",
 Glob_max_downl         : "Tổng băng thông tải xuống cao nhất",
 Num_of_conn            : "Số phiên kết nối",
 Glob_max_conn          : "Tổng số kết nối lớn nhất",
 Max_conn_peer_torr     : "Tổng số máy kết nối cho mỗi torrent",
 Num_upl_slots          : "Số khe tải lên cho mỗi torrent",
 Extra_ulslots          : "Thêm khe tải lên nếu tốc độ tải lên < 90%",
 Add_bittor_featrs      : "Các tính năng bổ sung",
 En_DHT_ntw                     : "Sử dụng DHT",
 Ask_scrape                     : "Lấy thông tin phụ từ Máy theo dõi",
 En_DHT_new_torrs       : "Bật DHT cho các torrent mới",
 Peer_exch                      : "Trao đổi ngang",
 Ip_report_track        : "Địa chỉ IP/Tên máy báo về Máy theo dõi",
 Protocol_enc           : "Giao thức mã hóa",
 Outgoing                       : "Chiều ra",
 Disabled                       : "Vô hiệu",
 Enabled                        : "Kích hoạt",
 Forced                         : "Bắt buộc",
 All_inc_legacy_conn    : "Cho phép kế thừa các kết nối đến",
 Queue_sett                     : "Cài đặt hàng đợi",
 Max_n_act_torrs        : "Tổng số torrent được hoạt động (cả tải xuống và tải lên)",
 Max_num_act_downl      : "Tổng số torrent tải xuống",
 Seed_while                     : "Giữ Seed Khi [Các giá trị mặc định]",
 Ratio_is                       : "Tỉ lệ là",
 or_time_is                     : " % hoặc thời gian giữ seed là ",
 Ignore                         : "(Bỏ qua)",
 nin_min                        : "90 phút",
 two_h                          : "2 giờ",
 three_h                        : "3 giờ",
 four_h                         : "4 giờ",
 five_h                         : "5 giờ",
 six_h                          : "6 giờ",
 seven_h                        : "7 giờ",
 eight_h                        : "8 giờ",
 nine_h                         : "9 giờ",
 ten_h                          : "10 giờ",
 twelve_h                       : "12 giờ",
 sixteen_h                      : "16 giờ",
 twenty_h                       : "20 giờ",
 tw_four_h                      : "24 giờ",
 thirty_h                       : "30 giờ",
 thirty_six_h                   : "36 giờ",
 forty_eight_h                  : "48 giờ",
 sixty_h                        : "60 giờ",
 sev_two_h                      : "72 giờ",
 nin_six_h                      : "96 giờ",
 Seed_prior                     : "Ưu tiên giữ seed hơn tải",
 When_torr_reach        : "Khi Torrent đạt mức seed",
 Limit_upl_rate         : "Giới hạn tốc độ tải lên [nhập 0 để dừng torrent]",
 En_shedul                      : "Bật lịch",
 Shed_sett                      : "Cài đặt lịch",
 Lim_upl_rate           : "Giới hạn tốc độ tải lên",
 Lim_dow_rate           : "Giới hạn tốc độ tải xuống",
 Dis_DHT_when_t_off     : "Vô hiệu hóa DHT khi tắt",
 Disc_cahe                      : "Bộ đệm Đĩa",
 Disc_cahe_bla_bla      : "Bộ đệm đĩa sẽ giúp lưu các dữ liệu thường dùng vào bộ nhớ RAM nhằm giảm quá trình truy xuất liên tục vào đĩa cứng. rTorrent có thể quản lý bộ đệm này một cách tự động, nhưng bạn có thể chỉnh lại theo các thông số theo ý mình.",
 Overwr_d_cahe_au       : "Tự động ghi đè bộ đệm và xác định kích thước thủ công",
 MB                                     : "MB",
 Red_mem_usage          : "Giảm sử dụng bộ nhớ khi không dùng bộ đệm",
 Adv_cache_sett         : "Cài đặt bộ đệm (nâng cao)",
 En_cach_disc           : "Kích hoạt tính năng bộ đệm ghi",
 Wr_out_ever_2_min      : "Ghi vào khối không sử dụng sau mỗi 2 phút",
 Wr_immed                       : "Ghi ngay mảnh đã hoàn thành vào đĩa",
 En_cah_disc_read       : "Kích hoạt Bộ đệm đọc",
 Turn_off_w_read        : "Tắt bộ đệm đọc khi tốc độ tải lên thấp",
 Rem_old_from_cahe      : "Xóa các khối cũ khỏi bộ đệm",
 Increase_autom_cach    : "Tự động tăng kích thước bộ đệm khi xảy ra quá tải",
 Advanced                       : "Nâng cao",
 Advanced_label         : "Các tùy chọn nâng cao [Chú ý: Không tự ý thay đổi!]",
 Cancel                         : "Hủy bỏ",
 uTorrent_settings      : "Cài đặt rTorrent",
 
// Main window
 Doesnt_support         : "ruTorrent không hỗ trợ trình duyệt này.",
 Name                           : "Tên",
 Status                         : "Trạng Thái",
 Size                           : "Kích Thước",
 Done                           : "Hoàn thành",
 Downloaded                     : "Tải xuống",
 Uploaded                       : "Tải lên",
 Ratio                          : "Tỉ lệ",
 DL                                     : "Xuống",
 UL                                     : "Lên",
 ETA                            : "Hoàn thành sau",
 Label                          : "Nhãn",
 Peers                          : "Máy khách",
 Seeds                          : "Máy nguồn",
 Avail                          : "Khả dụng.",
 Remaining                      : "Còn lại",
 Priority                       : "Ưu tiên",
 Download                       : "Tải xuống",
 Upload                         : "Tải lên",
 Not_torrent_file       : "Tập tin phải là tập tin torrent.",
 Pausing                        : "Đang tạm dừng",
 Seeding                        : "Đang làm nguồn",
 Downloading            : "Đang tải",
 Checking                       : "Đang kiểm tra",
 Error                          : "Lỗi",
 Queued                         : "Đang chờ",
 Finished                       : "Hoàn thành",
 Stopped                        : "Dừng hoàn toàn",
 Request_timed_out      : "Yêu cầu gửi đến rTorrent quá lâu.",
 
 Force_Start            : "Khởi động (Bắt buộc)",
 Start                          : "Khởi động",
 Pause                          : "Tạm dừng",
 Stop                           : "Dừng",
 Force_recheck          : "Yêu cầu kiểm tra lại",
 New_label                      : "Nhãn mới...",
 Remove_label           : "Bỏ nhãn",
 Labels                         : "Nhãn phân loại",
 Remove                         : "Gỡ bỏ",
 Delete_data            : "Xóa dữ liệu",
 Remove_and                     : "Gỡ bỏ và",
 Details                        : "Chi tiết...",
 Properties                     : "Thuộc tính...",
 of                             : "trong số",                 //this two creates line
 connected                      : "đã kết nối",  //  XX of YY connected
 High_priority          : "Cao",
 Normal_priority        : "Thường",
 Low_priority           : "Thấp",
 Dont_download          : "Không tải",
 Shure_restore_UI       : "Bạn có chắc chắn muốn khôi phục lại giao diện về mặc định?",
 Reloading                      : "Đang tải lại...",
 Name                           : "Tên",
 Date_                          : "Ngày",
 Files                          : "Tập tin",
 Logger                         : "Nhật ký",
 
 s                                      : "s",    // part of "KB/s"
 bytes                          : "bytes",
 KB                                     : "KB",
 MB                                     : "MB",
 GB                                     : "GB",
 TB                                     : "TB",
 PB                                     : "PB",
 
 // main WND s
 Loading                        : "Đang tải...",
 Torrent_file           : "Tập tin Torrent",
 Torrent_URL            : "Torrent URL",
 Cookies                        : "Cookies",
 RSS_Downloader         : "Tính năng RSS",
 Torrent_properties     : "Thuộc tính Torrent",
 Trackers                       : "Máy theo dõi",
 Max_down_rate          : "Tốc độ tải xuống tối đa",
 Max_upl_rate           : "Tốc độ tải lên tối đa",
 Bandwidth_sett         : "Cài đặt băng thông",
 Number_ul_slots        : "Số khe tải lên",
 Override_default       : "Ghi đè các cài đặt mặc định",
 Initial_seed           : "Seed lúc đầu",
 Enable_DHT                     : "Bật DHT",
 Peer_ex                        : "Trao đổi ngang",
 About                          : "Giới thiệu",
 Enter_label_prom       : "Nhập nhãn mới cho các Torrent đã chọn",
 Remove_torrents        : "Bỏ Torrent",
 Rem_torrents_prompt: "Bạn thực sự muốn bỏ các torrent đã chọn?",
 All                            : "Tất cả",
 Active                         : "Hoạt động",
 Inactive                       : "Không hoạt động",
 No_label                       : "Không nhãn",
 Transfer                       : "Truyền",
 Time_el                        : "Thời gian chạy",
 Remaining                      : "Còn lại",
 Share_ratio            : "Tỉ lệ chia sẻ",
 Down_speed                     : "Tốc độ tải xuống",
 Down_limit                     : "Giởi hạn tải xuống",
 Ul_speed                       : "Tốc độ tải lên",
 Ul_limit                       : "Giới hạn tải lên",
 Wasted                         : "Lãng phí",
 Tracker                        : "Máy theo dõi",
 Track_URL                      : "Địa chỉ Máy theo dõi",
 Track_status           : "Trình trạng Máy theo dõi",
 Update_in                      : "Cập nhật trong",
 DHT_status                     : "Trạng thái DHT",
 Save_as                        : "Lưu vào",
 Tot_size                       : "Tổng dung lượng",
 Created_on                     : "Khởi tạo lúc",
 Comment                        : "Ghi chú",
 
 
 //buttons
 add_button                     : "Thêm tập tin",
 add_url                        : "Thêm URL",
 ok                             : " Đồng ý ",
 Cancel                         : "  Hủy  ",
 no                             : " Không ",
 
 mnu_add                        : "Thêm Torrent",
 mnu_remove                     : "Gỡ bỏ",
 mnu_start                      : "Bắt đầu",
 mnu_pause                      : "Tạm dừng",
 mnu_stop                       : "Dừng lại",
 mnu_rss                        : "Chương trình RSS",
 mnu_settings                   : "Cài đặt",
 mnu_search                     : "Tìm kiếm",
 mnu_lang                       : "Ngôn ngữ",
 
 //Other variables added by spide
 torrent_add                    : "Thêm Torrent", /*Caption of torrent add box*/
 time_w                         : "tuần ", /*for x weeks*/
 time_d                         : "ng ", /*for x days remaining*/
 time_h                         : "t ", /*for x hours remaining*/
 time_m                         : "ph ", /*for x minutes remaining*/
 time_s                         : "g ", /*for x seconds remaining*/

 //Novik's addition
 Base_directory                 : "Thư mục",
 Number_Peers_min               : "Số khách tối thiểu",
 Number_Peers_max               : "Số khách tối đa",
 Tracker_Numwant                : "Số khách mong muốn",
 Number_Peers_For_Seeds_min     : "Số nguồn tối thiểu",
 Number_Peers_For_Seeds_max     : "Số nguồn tối đa",
 Enable_port_open               : "Mở cổng",
 dht_port                       : "Sử dụng cổng UDP cho DHT",
 Ather_Limiting                 : "Các giới hạn khác",
 Number_dl_slots                : "Số khe tải xuống",
 Glob_max_memory                : "Bộ nhớ sử dụng tối đa",
 Glob_max_files                 : "Số tập tin mở tối đa",
 Glob_max_http                  : "Số kết nối HTTP tối đa",
 Glob_max_sockets               : "Số phiên kết nối tối đa",
 Ather_sett                     : "Khác",
 Directory_For_Dl               : "Thư mục mặc định khi tải về",
 Check_hash                     : "Kiểm tra hash sau khi tải",
 Hash                           : "Mã Hash",
 IsOpen                         : "Mở",
 DisableTracker                 : "Tắt",
 EnableTracker                  : "Bật",
 ClientVersion                  : "Chương trình",
 Flags                          : "Cờ",
 ReqTimeout                     : "Thời gian chờ",
 GetTrackerMessage              : "Nhận thông điệp từ Máy theo dõi",
 Help                           : "Giúp đỡ",
 PHPDoesnt_enabled              : "Máy chủ Web của bạn không hỗ trợ PHP. Bạn vui lòng kiểm tra và thử lại.",
 Speed                          : "Tốc độ",
 Dont_add_tname                 : "Không thêm tên torrent vào đường dẫn",
 Free_Disk_Space                : "Dung lượng đĩa trống",
 badXMLRPCVersion               : "rTorrent được biên dịch với thư viện xmlrpc-c không hỗ trợ i8. Phiên bản phải mới hơn 1.11. Một số tính năng sẽ không sử dụng được.",
 badLinkTorTorrent              : "Không kết nối tới rTorrent. Kiểm tra xem rTorrent có chạy không. Đồng thời kiểm tra giá trị $scgi_port và $scgi_host trong tập tin config.php và giá trị scgi_port trong tập tin cấu hình rTorrent",
 badUploadsPath                 : "Máy chủ Web không có quyền đọc/ghi/thực thi thư mục torrent. Bạn không thể thêm torrent thông qua ruTorrent.",
 badSettingsPath                : "Máy chủ Web không có quyền đọc/ghi/thực thi thư mục cài đặt torrent. ruTorrent không thể lưu lại các cài dặt của bạn.",
 mnu_help                       : "Giới thiệu",
 badUploadsPath2                : "Người dùng rTorrent không thể đọc/thực thi các thư mục torrent. Bạn không thể thêm torrent thông qua ruTorrent.",
 View                           : "Hiển thị",
 AsList                         : "dạng danh sách",
 AsTree                         : "dạng cây",
 Group                          : "Nhóm",
 SuperSeed                      : "Tăng cường seed",
 badTestPath                    : "Người dùng rTorrent không thể đọc/thực thi tập tin ./test.sh. ruTorrent sẽ không hoạt động.",
 badSettingsPath2               : "Người dùng rTorrent không thể đọc/ghi/thực thi thư mục cài đặt torrent. ruTorrent sẽ không hoạt động.",
 scrapeDownloaded               : "Đã tải xuống",
 Total                          : "Tổng",
 PCRENotFound                   : "Mô-đun PCRE dành cho PHP chưa cài. ruTorrent sẽ không hoạt động.",
 addTorrentSuccess              : "torrent đã thêm vào rTorrent thành công.",
 addTorrentFailed               : "Lỗi: torrent chưa vào được rTorrent.",
 pnlState                       : "Tình trạng",
 newLabel                       : "Nhãn mới",
 enterLabel                     : "Nhập Nhãn",
 UIEffects                      : "Hiển thị hiệu ứng giao diện",
 Plugins                        : "Bổ sung",
 plgName                        : "Tên",
 plgStatus                      : "Trạng thải",
 plgLoaded                      : "Đang chạy",
 plgDisabled                    : "Vô hiệu",
 plgVersion                     : "Phiên bản",
 plgAuthor                      : "Tác giả",
 plgDescr                       : "Mô tả",
 mnu_go                         : "Bắt đầu",
 pluginCantStart                : "thành phần bổ sung không thể chạy vì không rõ lý do.",
 doFastResume                   : "Khôi phục nhanh",
 innerSearch                    : "Torrent nội bộ",
 removeTeg                      : "Loại bỏ tag",
 errMustBeInSomeHost            : "ruTorrent và rTorrent phải được cài đặt trên cùng một máy. Thành phần bổ sung sẽ không hoạt động.",
 warnMustBeInSomeHost           : "ruTorrent và rTorrent phải được cài đặt trên cùng một máy. Một số tính năng sẽ không hoạt động.",
 plgShutdown                    : "Tắt",
 limit                          : "Giới hạn",
 speedList                      : "Danh sách tốc độ (cách nhau bằng dấu phẩy)",
 ClearButton                    : "Xóa",
 dontShowTimeouts               : "Bỏ qua các thông điệp về thời gian chờ",
 fullTableRender                : "Vẽ lại đầy đủ các bảng lớn",
 showScrollTables               : "Hiện nội dung bảng khi cuộn",
 idNotFound                     : "Người dùng rTorrent's không thể truy cập chương trình 'id'. Một số tính năng sẽ không hoạt động.",
 gzipNotFound                   : "Máy chủ Web không thể truy cập chương trình 'gzip'. ruTorrent sẽ không hoạt động.",
 cantObtainUser                 : "ruTorrent không thể xác định uid hoặc người dùng rtorrent. Một số tính năng sẽ không hoạt động.",
 retryOnErrorTitle              : "Nếu rTorrent không tồn tại, tự động thử lại sau",
 retryOnErrorList               : { 0: "Không thử lại", 30: "30 giây", 60: "1 phút", 120: "2 phút", 300: "5 phút", 900: "15 phút" },
 statNotFound                   : "Người dùng rTorrent's không thể truy cập chương trình 'stat'. Một số tính năng sẽ không hoạt động.",
 statNotFoundW                  : "Người dùng máy chủ Web không thể truy cập chương trình 'stat'. Một số tính năng sẽ không hoạt động.",
 badrTorrentVersion             : "Phiên bản rTorrent không hỗ trợ thành phần bổ sung này. Thành phần này sẽ không hoạt động. Phiên bản rTorrent tối thiếu là",
 badPHPVersion                  : "Phiên bản PHP không hỗ trợ thành phần bổ sung này. Thành phần này sẽ không hoạt động. Phiên bản PHP tối thiếu là",
 rTorrentExternalNotFoundError  : "Thành phần bổ sung sẽ không hoạt động. Người dùng rTorrent không thể truy cập chương trình mở rộng",
 rTorrentExternalNotFoundWarning: "Một số tính năng sẽ không hoạt động. Người dùng rTorrent không thể truy cập chương trình mở rộng",
 webExternalNotFoundError       : "Thành phần bổ sung sẽ không hoạt động. Người dùng máy chủ Web không thể truy cập chương trình mở rộng",
 webExternalNotFoundWarning     : "Một số tính năng sẽ không hoạt động. Người dùng máy chủ Web không thể truy cập chương trình mở rộng",
 rTorrentBadScriptPath          : "Thành phần bổ sung sẽ không hoạt động. Người dùng rTorrent không thể đọc/thực thi tập tin",
 rTorrentBadPHPScriptPath       : "Thành phần bổ sung sẽ không hoạt động. Người dùng rTorrent không thể đọc tập tin",
 dependenceError                : "Thành phần bổ sung sẽ không hoạt động. Cần có sự tồn tại các thành phần mở rộng.",
 peerAdd                        : "Thêm máy khách...",
 peerBan                        : "Cấm",
 peerKick                       : "Đá",
 peerSnub                       : "Gian lận",
 peerDetails                    : "Chi tiết",
 peerUnsnub                     : "Bỏ gian lận",
 peerAddLabel                   : "Nhập IP/Tên máy[:cổng]",
 noTorrentList			: "Torrent list not yet available, connection to rtorrent not established.",
 yes				: "yes",
 no				: "no",
 DateFormat			: "Date format"
 };
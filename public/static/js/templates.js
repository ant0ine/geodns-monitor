var templates = {};
templates.server = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<tr>");_.b("\n" + i);if(_.s(_.f("server",c,p,1),c,p,0,16,586,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("<td><span style=\"background-color:rgb(");_.b(_.v(_.f("color",c,p,0)));_.b(")\">&nbsp;</span> <span rel=\"tooltip\" title=\"");if(_.s(_.f("names",c,p,1),c,p,0,118,127,"{{ }}")){_.rs(c,p,function(c,p,_){_.b(_.v(_.f("name",c,p,0)));_.b(" ");});c.pop();}_.b("\">");_.b(_.v(_.f("name",c,p,0)));_.b("</span></td>");_.b("\n" + i);_.b("\n" + i);_.b("<td><span class=\"ip\">");_.b(_.v(_.f("ip",c,p,0)));_.b("</a></td>");_.b("\n" + i);_.b("\n" + i);_.b("<td class=\"");_.b(_.v(_.f("qps_class",c,p,0)));_.b("\">");_.b("\n" + i);_.b("    ");if(_.s(_.f("qps",c,p,1),c,p,0,238,249,"{{ }}")){_.rs(c,p,function(c,p,_){_.b(_.v(_.f("qps",c,p,0)));_.b("/qps");});c.pop();}_.b("\n" + i);_.b("</td>");_.b("\n" + i);_.b("<td class=\"");_.b(_.v(_.f("response_time_class",c,p,0)));_.b("\">");_.b("\n" + i);_.b("	");if(_.s(_.f("response_time",c,p,1),c,p,0,320,340,"{{ }}")){_.rs(c,p,function(c,p,_){_.b(_.v(_.f("response_time",c,p,0)));_.b(" ms");});c.pop();}_.b("\n" + i);_.b("	");if(_.s(_.f("connection_type",c,p,1),c,p,0,380,399,"{{ }}")){_.rs(c,p,function(c,p,_){_.b(_.v(_.f("connection_type",c,p,0)));});c.pop();}_.b("\n" + i);_.b("</td>");_.b("\n" + i);_.b("<td>");_.b(_.v(_.f("version",c,p,0)));_.b("</td>");_.b("\n" + i);_.b("<td><small>");if(_.s(_.f("data",c,p,1),c,p,0,467,495,"{{ }}")){_.rs(c,p,function(c,p,_){if(_.s(_.f("groups",c,p,1),c,p,0,478,484,"{{ }}")){_.rs(c,p,function(c,p,_){_.b(_.v(_.d(".",c,p,0)));_.b(" ");});c.pop();}});c.pop();}_.b("</small></td>");_.b("\n" + i);_.b("<td>");_.b(_.v(_.f("uptime_p",c,p,0)));_.b("</td>");_.b("\n" + i);_.b("<td>");_.b(_.v(_.f("last_update",c,p,0)));_.b("</td>");_.b("\n" + i);_.b("<td>");_.b(_.v(_.f("status",c,p,0)));_.b("</td>");_.b("\n" + i);_.b("\n");});c.pop();}_.b("</tr>");return _.fl();;});
templates.summary = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");if(_.s(_.f("summary",c,p,1),c,p,0,12,88,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("    <span class=\"btn btn-info btn-large\">");_.b(_.v(_.f("qps",c,p,0)));_.b(" queries per second</span>");_.b("\n");});c.pop();}return _.fl();;});
